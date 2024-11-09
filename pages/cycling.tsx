import { useEffect, useState } from "react";

export default function Cycling() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("/api/strava/activities");
      const data = await response.json();

      // Filter activities for October 2024
      const filteredActivities = data.filter((activity) => {
        const activityDate = new Date(activity.activity_date); // Assuming the date is stored in activity.activity_date
        const activityMonth = activityDate.getMonth(); // 0-based (0 = January, 1 = February, etc.)
        const activityYear = activityDate.getFullYear();

        // Check if the activity is in October 2024
        return activityMonth === 10 && activityYear === 2024; // 9 represents October (0-based)
      });

      setActivities(filteredActivities);
    };

    fetchActivities();
  }, []);

  console.log(activities); // Log filtered activities

  return <div />;
}
