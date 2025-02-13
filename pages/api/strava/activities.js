import { get } from "@vercel/edge-config";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  try {
    const accessToken = await get("STRAVA_ACCESS_TOKEN");
    const refreshToken = await get("STRAVA_REFRESH_TOKEN");
    const expiresAt = await get("STRAVA_EXPIRES_AT");
    const currentTime = Math.floor(Date.now() / 1000);

    const supabaseUrl = process.env.SUPABASE_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let validAccessToken = accessToken;

    if (currentTime >= expiresAt) {
      const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: process.env.STRAVA_CLIENT_ID,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: "Failed to refresh token" });
      }

      const updateResponse = await fetch(
        `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
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
        console.error(updateResponse);
        return res
          .status(updateResponse.status)
          .json({ error: "Failed to update Edge Config" });
      }

      validAccessToken = data.access_token;
    }

    const activitiesResponse = await fetch(
      `https://www.strava.com/api/v3/athlete/activities`,
      { headers: { Authorization: `Bearer ${validAccessToken}` } },
    );

    if (!activitiesResponse.ok) {
      return res
        .status(activitiesResponse.status)
        .json({ error: "Failed to fetch activities" });
    }

    const activitiesData = await activitiesResponse.json();

    // ** Fetching all activities in batches from Supabase **
    let allActivities = [];
    let from = 0;
    const batchSize = 1000;

    while (true) {
      const { data: batchActivities, error } = await supabase
        .from("activities")
        .select("*")
        .range(from, from + batchSize - 1);

      if (error) {
        console.error("Error fetching data from database:", error);
        return res.status(500).json({ error: "Failed to fetch data from DB" });
      }

      allActivities = allActivities.concat(batchActivities);

      if (batchActivities.length < batchSize) break;
      from += batchSize;
    }

    // Extract existing activity IDs for comparison
    const dbActivityIds = new Set(
      allActivities.map((activity) => activity.id.toString()),
    );

    // ** Filter new activities to add **
    const newActivities = activitiesData
      .filter(
        (activity) =>
          !dbActivityIds.has(activity.id.toString()) &&
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

    // ** Insert new activities if there are any **
    if (newActivities.length > 0) {
      const { error: insertError } = await supabase
        .from("activities")
        .insert(newActivities);

      if (insertError) {
        console.error("Error inserting new activities:", insertError);
        return res
          .status(500)
          .json({ error: "Failed to insert new activities" });
      }
      console.log(`Inserted ${newActivities.length} new activities.`);
    } else {
      console.log("No new activities to add.");
    }

    // ** Refetch all activities in batches after inserting new ones **
    let updatedActivities = [];
    from = 0;

    while (true) {
      const { data: batchUpdatedActivities, error } = await supabase
        .from("activities")
        .select("*")
        .range(from, from + batchSize - 1)
        .order("activity_date", { ascending: false });

      if (error) {
        console.error("Error fetching updated activities:", error);
        return res
          .status(500)
          .json({ error: "Failed to fetch updated activities" });
      }

      updatedActivities = updatedActivities.concat(batchUpdatedActivities);

      if (batchUpdatedActivities.length < batchSize) break;
      from += batchSize;
    }

    res.status(200).json(updatedActivities);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
