import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  months,
  getDatesOfCurrentWeek,
  getDatesOfCurrentMonth,
  currentWeekActivities,
  currentMonthActivities,
  currentYearActivities,
  yearsOfActivities,
  getMonthlyDistances,
  getYearlyDistance,
  getTotalDistanceOfPeriod,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getDistanceOfCurrentDay,
} from "./utils";
import { Activity } from "./types";

export default function Cycling() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("/api/strava/activities");
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  const TotalComponent = ({ params }: { params: Activity[] }) => {
    return (
      <div>
        <p>Total distance: {getTotalDistanceOfPeriod(params)} km</p>
        // TODO: Fix the average speed calculation
        <p>Average speed: {getAverageSpeedOfPeriod(params)} km/h</p>
        <p>Total elevation gain: {getTotalElevationGainOfPeriod(params)}m</p>
      </div>
    );
  };

  console.log(getDatesOfCurrentWeek());
  console.log(getDatesOfCurrentMonth());
  console.log(currentWeekActivities(activities));
  console.log(currentMonthActivities(activities));
  console.log(currentYearActivities(activities));
  console.log(yearsOfActivities(activities));
  console.log(getMonthlyDistances(currentYearActivities(activities)));
  console.log(getYearlyDistance(2019, activities));

  return (
    <>
      <div>
        <h2>Current Week</h2>
        <div>
          {getDatesOfCurrentWeek().map((date, index) => (
            <span key={index}>
              {format(date, "E")}
              {getDistanceOfCurrentDay(date, currentWeekActivities(activities))}
              km
            </span>
          ))}
        </div>
        <TotalComponent params={currentWeekActivities(activities)} />
      </div>
      <div>
        <h2>Current Month</h2>
        <div>
          {getDatesOfCurrentMonth().map((date, index) => (
            <span key={index}>
              {format(date, "dd")}
              {getDistanceOfCurrentDay(
                date,
                currentMonthActivities(activities)
              )}
              km
            </span>
          ))}
        </div>
        <TotalComponent params={currentMonthActivities(activities)} />
      </div>
      <div>
        <h2>Current Year</h2>
        <div>
          {Object.keys(months).map((key, index) => (
            <span key={index}>
              {months[parseInt(key, 10)]}
              {getMonthlyDistances(currentYearActivities(activities))[index]}km
            </span>
          ))}
        </div>
        <TotalComponent params={currentYearActivities(activities)} />
      </div>
      <div>
        <h2>All Time</h2>
        <div>
          {yearsOfActivities(activities).map((year, index) => (
            <span key={index}>
              {year} - {getYearlyDistance(year, activities)}km
            </span>
          ))}
        </div>
        <TotalComponent params={activities} />
      </div>
    </>
  );
}
