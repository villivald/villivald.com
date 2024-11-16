import { useEffect, useState } from "react";
import {
  isThisWeek,
  isThisMonth,
  isThisYear,
  isSameDay,
  getYear,
  getMonth,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  format,
  parse,
} from "date-fns";

type Activity = {
  activity_date: string;
  distance: string;
  average_speed: string;
  total_elevation_gain: string;
};

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

  // Get the dates of the current week - Monday to Sunday (e.g. 2024-11-12)
  const getDatesOfCurrentWeek = () => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 });

    const weekDates = [];
    let currentDate = startOfCurrentWeek;

    while (currentDate <= endOfCurrentWeek) {
      weekDates.push(format(currentDate, "yyyy-MM-dd"));
      currentDate = addDays(currentDate, 1);
    }

    return weekDates;
  };

  // Get the dates of the current month - 1st to last day of the month (e.g. 2024-11-01)
  const getDatesOfCurrentMonth = () => {
    const today = new Date();
    const startOfCurrentMonth = startOfMonth(today);
    const endOfCurrentMonth = endOfMonth(today);

    const monthDates = [];
    let currentDate = startOfCurrentMonth;

    while (currentDate <= endOfCurrentMonth) {
      monthDates.push(format(currentDate, "yyyy-MM-dd"));
      currentDate = addDays(currentDate, 1);
    }

    return monthDates;
  };

  const months: { [key: number]: string } = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  // Activities from the current week - Monday to Sunday
  const currentWeekActivities = activities.filter((activity) => {
    return isThisWeek(activity.activity_date, { weekStartsOn: 1 });
  });

  // Activities from the current month - 1st to last day of the month
  const currentMonthActivities = activities.filter((activity) => {
    return isThisMonth(activity.activity_date);
  });

  // Activities from the current year - 1st January to 31st December
  const currentYearActivities = activities.filter((activity) => {
    return isThisYear(activity.activity_date);
  });

  // Get the list of years with activities
  const yearsOfActivities = activities.reduce((years: number[], activity) => {
    const year = getYear(activity.activity_date);
    if (!years.includes(year)) {
      years.push(year);
    }
    return years.sort();
  }, []);

  const getDistanceOfCurrentDay = (date: string, activities: Activity[]) => {
    return (
      parseInt(
        activities.filter((activity) =>
          isSameDay(activity.activity_date, date)
        )[0]?.distance || "0"
      ) || 0
    ).toFixed(2);
  };

  const getTotalDistanceOfPeriod = (activities: Activity[]) => {
    return (
      activities.reduce(
        (total, activity) => total + parseFloat(activity.distance),
        0
      ) || 0
    ).toFixed(2);
  };

  const getAverageSpeedOfPeriod = (activities: Activity[]) => {
    return (
      (activities.reduce(
        (total, activity) => total + parseFloat(activity.average_speed),
        0
      ) /
        activities.length) *
        3.6 || 0
    ).toFixed(2);
  };

  const getTotalElevationGainOfPeriod = (activities: Activity[]) => {
    return (
      activities.reduce(
        (total, activity) => total + parseFloat(activity.total_elevation_gain),
        0
      ) || 0
    ).toFixed(0);
  };

  const getMonthlyDistances = (activities: Activity[]) => {
    const monthlyDistances: { [key: number]: number } = {};

    activities.forEach((activity) => {
      const monthIndex = getMonth(activity.activity_date);
      const distance = parseFloat(activity.distance) || 0;

      if (!monthlyDistances[monthIndex]) {
        monthlyDistances[monthIndex] = 0;
      }
      monthlyDistances[monthIndex] += distance;
    });

    const result = Object.keys(months).map((key) => {
      const monthIndex = parseInt(key, 10);
      const totalDistance = monthlyDistances[monthIndex] || 0;
      return totalDistance.toFixed(2);
    });

    return result;
  };

  console.log(getDatesOfCurrentWeek());
  console.log(getDatesOfCurrentMonth());
  console.log(currentWeekActivities);
  console.log(currentMonthActivities);
  console.log(currentYearActivities);
  console.log(yearsOfActivities);
  console.log(getMonthlyDistances(currentYearActivities));

  return (
    <>
      <div>
        <h2>Current Week</h2>
        <div>
          {getDatesOfCurrentWeek().map((date, index) => (
            <span key={index}>
              {format(date, "E")}
              {getDistanceOfCurrentDay(date, currentWeekActivities)}km
            </span>
          ))}
        </div>
        <div>
          <p>
            Total distance: {getTotalDistanceOfPeriod(currentWeekActivities)} km
          </p>
          <p>
            Average speed: {getAverageSpeedOfPeriod(currentWeekActivities)} km/h
          </p>
          <p>
            Total elevation gain:{" "}
            {getTotalElevationGainOfPeriod(currentWeekActivities)}m
          </p>
        </div>
      </div>
      <div>
        <h2>Current Month</h2>
        <div>
          {getDatesOfCurrentMonth().map((date, index) => (
            <span key={index}>
              {format(date, "dd")}
              {getDistanceOfCurrentDay(date, currentMonthActivities)}km
            </span>
          ))}
        </div>
        <div>
          <p>
            Total distance: {getTotalDistanceOfPeriod(currentMonthActivities)}{" "}
            km
          </p>
          <p>
            Average speed: {getAverageSpeedOfPeriod(currentMonthActivities)}{" "}
            km/h
          </p>
          <p>
            Total elevation gain:{" "}
            {getTotalElevationGainOfPeriod(currentMonthActivities)}m
          </p>
        </div>
      </div>
      <div>
        <h2>Current Year</h2>
        <div>
          {Object.keys(months).map((key, index) => (
            <span key={index}>
              {months[parseInt(key, 10)]}
              {getMonthlyDistances(currentYearActivities)[index]}km
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2>All Time</h2>
        <ul>
          {yearsOfActivities.map((year, index) => (
            <li key={index}>{year}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
