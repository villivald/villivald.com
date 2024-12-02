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

// Get the dates of the current week - Monday to Sunday (e.g. 2024-11-12)
export const getDatesOfCurrentWeek = (baseDate: Date) => {
  const startOfCurrentWeek = startOfWeek(baseDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(baseDate, { weekStartsOn: 1 });

  const weekDates = [];
  let currentDate = startOfCurrentWeek;

  while (currentDate <= endOfCurrentWeek) {
    weekDates.push(format(currentDate, "yyyy-MM-dd"));
    currentDate = addDays(currentDate, 1);
  }

  return weekDates;
};

// Get the dates of the current month - 1st to last day of the month (e.g. 2024-11-01)
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

// Activities from the current week - Monday to Sunday
export const currentWeekActivities = (activities: Activity[]) =>
  activities.filter((activity) => {
    return isThisWeek(activity.activity_date, { weekStartsOn: 1 });
  });

// Activities from the current month - 1st to last day of the month
export const currentMonthActivities = (activities: Activity[]) =>
  activities.filter((activity) => {
    return isThisMonth(activity.activity_date);
  });

// Activities from the current year - 1st January to 31st December
export const currentYearActivities = (activities: Activity[]) =>
  activities.filter((activity) => {
    return isThisYear(activity.activity_date);
  });

// Get the list of years with activities
export const yearsOfActivities = (activities: Activity[]) =>
  activities.reduce((years: number[], activity) => {
    const year = getYear(activity.activity_date);
    if (!years.includes(year)) {
      years.push(year);
    }
    return years.sort();
  }, []);

export const getDistanceOfDay = (date: string, activities: Activity[]) => {
  return (
    parseFloat(
      activities.filter((activity) =>
        isSameDay(activity.activity_date, date)
      )[0]?.distance || "0"
    ) || 0
  ).toFixed(2);
};

export const getTotalDistanceOfPeriod = (activities: Activity[]) => {
  return (
    activities.reduce(
      (total, activity) => total + parseFloat(activity.distance),
      0
    ) || 0
  ).toFixed(2);
};

export const getAverageSpeedOfPeriod = (activities: Activity[]) => {
  const totalDistance = parseFloat(getTotalDistanceOfPeriod(activities));
  const totalTime = activities.reduce(
    (total, activity) => total + activity.moving_time,
    0
  );

  const averageSpeed = totalDistance / (totalTime / 3600) || 0;

  return averageSpeed.toFixed(2);
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
  activities.filter((activity) => {
    return (
      getYear(activity.activity_date) === year &&
      getMonth(activity.activity_date) === month
    );
  });

// Activities from a specific day
export const activitiesOfDay = (date: string, activities: Activity[]) =>
  activities.filter((activity) => {
    return isSameDay(activity.activity_date, date);
  });

export const getTotalElevationGainOfPeriod = (activities: Activity[]) => {
  return (
    activities.reduce((total, activity) => {
      const elevationGain = parseFloat(activity.total_elevation_gain);
      return total + (isNaN(elevationGain) ? 0 : elevationGain);
    }, 0) || 0
  ).toFixed(0);
};

export const getMonthlyDistances = (activities: Activity[]) => {
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

export const getYearlyDistance = (year: number, activities: Activity[]) => {
  return (
    activities.reduce((total, activity) => {
      if (getYear(activity.activity_date) === year) {
        return total + parseFloat(activity.distance);
      }
      return total;
    }, 0) || 0
  ).toFixed(2);
};
