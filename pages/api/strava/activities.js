import { createClient } from "@supabase/supabase-js";
import { get } from "@vercel/edge-config";

export default async function handler(req, res) {
  try {
    // Validate required environment variables
    const requiredEnvVars = {
      SUPABASE_SUPABASE_URL: process.env.SUPABASE_SUPABASE_URL,
      SUPABASE_SUPABASE_SERVICE_ROLE_KEY:
        process.env.SUPABASE_SUPABASE_SERVICE_ROLE_KEY,
      STRAVA_CLIENT_ID: process.env.STRAVA_CLIENT_ID,
      STRAVA_CLIENT_SECRET: process.env.STRAVA_CLIENT_SECRET,
      EDGE_CONFIG_ID: process.env.EDGE_CONFIG_ID,
      VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN,
    };

    const missingEnvVars = Object.entries(requiredEnvVars)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingEnvVars.length > 0) {
      console.error("Missing required environment variables:", missingEnvVars);
      return res.status(500).json({
        error: "Server configuration error",
        details: "Missing required environment variables",
      });
    }

    // Get tokens from edge config with validation
    let accessToken, refreshToken, expiresAt;

    try {
      accessToken = await get("STRAVA_ACCESS_TOKEN");
      refreshToken = await get("STRAVA_REFRESH_TOKEN");
      expiresAt = await get("STRAVA_EXPIRES_AT");
    } catch (error) {
      console.error("Failed to fetch tokens from edge config:", error);
      return res.status(500).json({
        error: "Failed to fetch authentication tokens",
        details: "Edge config access failed",
      });
    }

    if (!accessToken || !refreshToken || !expiresAt) {
      return res.status(500).json({
        error: "Missing authentication tokens",
        details: "Strava tokens not configured in edge config",
      });
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const supabase = createClient(
      requiredEnvVars.SUPABASE_SUPABASE_URL,
      requiredEnvVars.SUPABASE_SUPABASE_SERVICE_ROLE_KEY,
    );

    let validAccessToken = accessToken;

    // Refresh token if expired
    if (currentTime >= expiresAt) {
      try {
        const response = await fetch("https://www.strava.com/oauth/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: requiredEnvVars.STRAVA_CLIENT_ID,
            client_secret: requiredEnvVars.STRAVA_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Strava token refresh failed:", errorData);
          return res.status(response.status).json({
            error: "Failed to refresh Strava token",
            details: errorData.message || "Token refresh failed",
          });
        }

        const data = await response.json();

        // Update edge config with new tokens
        try {
          const updateResponse = await fetch(
            `https://api.vercel.com/v1/edge-config/${requiredEnvVars.EDGE_CONFIG_ID}/items`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${requiredEnvVars.VERCEL_API_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: [
                  {
                    operation: "upsert",
                    key: "STRAVA_ACCESS_TOKEN",
                    value: data.access_token,
                  },
                  {
                    operation: "upsert",
                    key: "STRAVA_REFRESH_TOKEN",
                    value: data.refresh_token,
                  },
                  {
                    operation: "upsert",
                    key: "STRAVA_EXPIRES_AT",
                    value: data.expires_at,
                  },
                ],
              }),
            },
          );

          if (!updateResponse.ok) {
            const errorData = await updateResponse.json().catch(() => ({}));
            console.error("Failed to update edge config:", errorData);
            // Continue with new token even if edge config update fails
            console.warn(
              "Continuing with new token despite edge config update failure",
            );
          }
        } catch (updateError) {
          console.error("Error updating edge config:", updateError);
          // Continue with new token even if edge config update fails
          console.warn(
            "Continuing with new token despite edge config update failure",
          );
        }

        validAccessToken = data.access_token;
      } catch (refreshError) {
        console.error("Error during token refresh:", refreshError);
        return res.status(500).json({
          error: "Failed to refresh authentication token",
          details: "Token refresh process failed",
        });
      }
    }

    // Fetch activities from Strava
    let activitiesData;
    try {
      const activitiesResponse = await fetch(
        `https://www.strava.com/api/v3/athlete/activities`,
        { headers: { Authorization: `Bearer ${validAccessToken}` } },
      );

      if (!activitiesResponse.ok) {
        const errorData = await activitiesResponse.json().catch(() => ({}));
        console.error("Failed to fetch activities from Strava:", errorData);
        return res.status(activitiesResponse.status).json({
          error: "Failed to fetch activities from Strava",
          details: errorData.message || "Strava API request failed",
        });
      }

      activitiesData = await activitiesResponse.json();
    } catch (fetchError) {
      console.error("Error fetching activities from Strava:", fetchError);
      return res.status(500).json({
        error: "Failed to fetch activities from Strava",
        details: "Network or API error",
      });
    }

    // Get existing activity IDs efficiently (only IDs, not full data)
    let existingActivityIds = new Set();
    try {
      const { data: existingIds, error: idsError } = await supabase
        .from("activities")
        .select("id");

      if (idsError) {
        console.error("Error fetching existing activity IDs:", idsError);
        return res.status(500).json({
          error: "Failed to fetch existing activities",
          details: "Database query failed",
        });
      }

      existingActivityIds = new Set(
        existingIds.map((activity) => activity.id.toString()),
      );
    } catch (dbError) {
      console.error("Error accessing database:", dbError);
      return res.status(500).json({
        error: "Failed to access database",
        details: "Database connection error",
      });
    }

    // Filter and prepare new activities
    const newActivities = activitiesData
      .filter(
        (activity) =>
          !existingActivityIds.has(activity.id.toString()) &&
          (activity.type === "Ride" || activity.type === "VirtualRide"),
      )
      .map((activity) => ({
        id: activity.id,
        activity_date: activity.start_date,
        distance: activity.distance / 1000,
        elapsed_time: activity.elapsed_time,
        moving_time: activity.moving_time,
        average_speed: activity.average_speed,
        total_elevation_gain: activity.total_elevation_gain,
        type: activity.type,
      }));

    // Insert new activities if there are any
    if (newActivities.length > 0) {
      try {
        const { error: insertError } = await supabase
          .from("activities")
          .insert(newActivities);

        if (insertError) {
          console.error("Error inserting new activities:", insertError);
          return res.status(500).json({
            error: "Failed to insert new activities",
            details: "Database insert failed",
          });
        }

        console.log(`Inserted ${newActivities.length} new activities.`);
      } catch (insertError) {
        console.error("Error during activity insertion:", insertError);
        return res.status(500).json({
          error: "Failed to insert new activities",
          details: "Database operation failed",
        });
      }
    } else {
      console.log("No new activities to add.");
    }

    // Fetch all activities efficiently with pagination
    let allActivities = [];
    let from = 0;
    const batchSize = 1000;

    try {
      while (true) {
        const { data: batchActivities, error } = await supabase
          .from("activities")
          .select("*")
          .range(from, from + batchSize - 1)
          .order("activity_date", { ascending: false });

        if (error) {
          console.error("Error fetching activities batch:", error);
          return res.status(500).json({
            error: "Failed to fetch activities",
            details: "Database query failed",
          });
        }

        allActivities = allActivities.concat(batchActivities);

        if (batchActivities.length < batchSize) break;
        from += batchSize;
      }
    } catch (fetchError) {
      console.error("Error fetching activities:", fetchError);
      return res.status(500).json({
        error: "Failed to fetch activities",
        details: "Database operation failed",
      });
    }

    res.status(200).json(allActivities);
  } catch (error) {
    console.error("Unexpected error in activities API:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: "An unexpected error occurred",
    });
  }
}
