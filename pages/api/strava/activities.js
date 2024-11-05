import { get, set } from "@vercel/edge-config";

export default async function handler(req, res) {
  try {
    // Retrieve tokens and expiration from Edge Config
    const accessToken = await get("STRAVA_ACCESS_TOKEN");
    const refreshToken = await get("STRAVA_REFRESH_TOKEN");
    const expiresAt = await get("STRAVA_EXPIRES_AT");
    const currentTime = Math.floor(Date.now() / 1000); // current time in seconds

    let validAccessToken = accessToken;

    // Check if the access token is expired
    if (currentTime >= expiresAt) {
      // Token is expired, so refresh it
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

      // Update Edge Config with the new tokens and expiration time
      await set("STRAVA_ACCESS_TOKEN", data.access_token);
      await set("STRAVA_REFRESH_TOKEN", data.refresh_token);
      await set("STRAVA_EXPIRES_AT", data.expires_at);

      // Use the refreshed access token for the activity request
      validAccessToken = data.access_token;
    }

    // Fetch activities using the (potentially refreshed) access token
    const activitiesResponse = await fetch(
      "https://www.strava.com/api/v3/athletes/42251423/stats",
      {
        headers: {
          Authorization: `Bearer ${validAccessToken}`,
        },
      }
    );

    if (!activitiesResponse.ok) {
      return res
        .status(activitiesResponse.status)
        .json({ error: "Failed to fetch activities" });
    }

    const activitiesData = await activitiesResponse.json();
    res.status(200).json(activitiesData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
