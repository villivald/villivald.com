import { useEffect, useState } from "react";

export default function Cycling() {
  const [activities, setActivities] = useState<{ activity_date: string }[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("/api/strava/activities");
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  const filteredActivities: any[] = activities.filter((activity) => {
    const activityDate = new Date(activity.activity_date); // Assuming the date is stored in activity.activity_date
    const activityMonth = activityDate.getMonth(); // 0-based (0 = January, 1 = February, etc.)
    const activityYear = activityDate.getFullYear();

    // Check if the activity is in October 2024
    return activityMonth === 9 && activityYear === 2024; // 9 represents October (0-based)
  });

  console.log(filteredActivities);

  return <div />;
}
