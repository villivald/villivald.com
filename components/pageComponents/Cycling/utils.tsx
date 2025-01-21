import { useEffect, useState } from "react";
import {
  isSameDay,
  getYear,
  getMonth,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  format,
} from "date-fns";
import { Activity } from "./types";

export const months: { [key: number]: string } = {
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

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const useDynamicToday = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return today;
};

// Get the dates of the current week - Monday to Sunday
export const getDatesOfCurrentWeek = (baseDate: Date) => {
  const startOfCurrentWeek = startOfWeek(baseDate, { weekStartsOn: 1 });

  return Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startOfCurrentWeek, index), "yyyy-MM-dd")
  );
};

// Get the dates of the current month - 1st to last day of the month
export const getDatesOfCurrentMonth = (baseDate: Date) => {
  const startOfCurrentMonth = startOfMonth(baseDate);
  const endOfCurrentMonth = endOfMonth(baseDate);

  const monthDates = [];
  let currentDate = startOfCurrentMonth;

  // Add placeholders for days before the start of the month
  const startDay = startOfCurrentMonth.getDay();
  const placeholders = Array.from({ length: (startDay + 6) % 7 }, () => null);

  while (currentDate <= endOfCurrentMonth) {
    monthDates.push(format(currentDate, "yyyy-MM-dd"));
    currentDate = addDays(currentDate, 1);
  }

  return [...placeholders, ...monthDates];
};

// Get the list of years with activities
export const yearsOfActivities = (activities: Activity[]) => {
  const years = new Set<number>();
  activities?.forEach((activity) => years.add(getYear(activity.activity_date)));

  return Array.from(years).sort();
};

// Get distance of a specific day
export const getDistanceOfDay = (date: string, activities: Activity[]) => {
  const totalDistance = activities
    .filter((activity) => isSameDay(activity.activity_date, date))
    .reduce(
      (total, activity) => total + parseFloat(activity.distance || "0"),
      0
    );

  return totalDistance.toFixed(2);
};

// Get the total distance of a period
export const getTotalDistanceOfPeriod = (activities: Activity[]) => {
  return (
    activities?.reduce(
      (total, activity) => total + parseFloat(activity.distance),
      0
    ) || 0
  ).toFixed(2);
};

// Get the average speed of a period
export const getAverageSpeedOfPeriod = (activities: Activity[]) => {
  const totalDistance = parseFloat(getTotalDistanceOfPeriod(activities));
  const totalTime = activities?.reduce(
    (total, activity) => total + activity.moving_time,
    0
  );

  const averageSpeed = totalDistance / (totalTime / 3600) || 0;

  return averageSpeed.toFixed(2);
};

// Get the total elevation gain of a period
export const getTotalElevationGainOfPeriod = (activities: Activity[]) => {
  return (
    activities?.reduce((total, activity) => {
      const elevationGain = parseFloat(activity.total_elevation_gain);
      return total + (isNaN(elevationGain) ? 0 : elevationGain);
    }, 0) || 0
  ).toFixed(0);
};

// Activities from a specific year
export const activitiesOfYear = (year: number, activities: Activity[]) =>
  activities.filter((activity) => {
    return getYear(activity.activity_date) === year;
  });

// Activities from a specific month
export const activitiesOfMonth = (
  month: number,
  year: number,
  activities: Activity[]
) =>
  activities?.filter((activity) => {
    return (
      getYear(activity.activity_date) === year &&
      getMonth(activity.activity_date) === month
    );
  });

// Activities from a specific week
export const activitiesOfWeek = (baseDate: Date, activities: Activity[]) => {
  const startOfCurrentWeek = startOfWeek(baseDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(baseDate, { weekStartsOn: 1 });

  return activities.filter((activity) => {
    const activityDate = new Date(activity.activity_date);
    return (
      activityDate >= startOfCurrentWeek && activityDate <= endOfCurrentWeek
    );
  });
};

// Activities from a specific day
export const activitiesOfDay = (date: string, activities: Activity[]) =>
  activities?.filter((activity) => {
    return isSameDay(activity.activity_date, date);
  });

// Get distances for each month in a specific period
export const getMonthlyDistances = (activities: Activity[]) => {
  const monthlyDistances: { [key: number]: number } = {};

  activities?.forEach((activity) => {
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
