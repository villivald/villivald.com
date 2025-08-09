import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  getYear,
  isSameDay,
  isThisWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useEffect, useState } from "react";

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
      const newDate = new Date();
      if (!isSameDay(today, newDate)) {
        setToday(newDate);
      }
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [today]);

  return today;
};

// Get the dates of the current week - Monday to Sunday
export const getDatesOfCurrentWeek = (baseDate: Date) => {
  const startOfCurrentWeek = startOfWeek(baseDate, { weekStartsOn: 1 });

  return Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startOfCurrentWeek, index), "yyyy-MM-dd"),
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
      0,
    );

  return totalDistance.toFixed(2);
};

// Get type of activity of a specific day
export const getTypeOfActivity = (date: string, activities: Activity[]) => {
  const activity = activities
    .filter((activity) => isSameDay(activity.activity_date, date))
    .sort((a, b) => b.moving_time - a.moving_time)[0];

  return activity?.type || "";
};

// Get the total moving time of a period
export const getTotalMovingTimeOfPeriod = (activities: Activity[]) => {
  return (
    activities?.reduce((total, activity) => total + activity.moving_time, 0) ||
    0
  );
};

// Get the total moving time in hours and minutes
export const getTotalMovingTimeInHoursAndMinutes = (
  activities: Activity[],
  hourString: string,
  minuteString: string,
) => {
  const totalMovingTime = getTotalMovingTimeOfPeriod(activities);
  const hours = Math.floor(totalMovingTime / 3600);
  const minutes = Math.floor((totalMovingTime % 3600) / 60);

  return `${hours} ${hourString} ${minutes} ${minuteString}`;
};

// Get the total moving time in hours, minutes and seconds
export const getTotalMovingTimeInHoursMinutesAndSeconds = (
  activities: Activity[],
) => {
  const totalMovingTime = getTotalMovingTimeOfPeriod(activities);
  const hours = Math.floor(totalMovingTime / 3600);
  const minutes = Math.floor((totalMovingTime % 3600) / 60);
  const seconds = Math.floor(totalMovingTime % 60);

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Get the total distance of a period
export const getTotalDistanceOfPeriod = (activities: Activity[]) => {
  return (
    activities?.reduce(
      (total, activity) => total + parseFloat(activity.distance),
      0,
    ) || 0
  ).toFixed(2);
};

// Get the average speed of a period
export const getAverageSpeedOfPeriod = (activities: Activity[]) => {
  const totalDistance = parseFloat(getTotalDistanceOfPeriod(activities));
  const totalTime = getTotalMovingTimeOfPeriod(activities);

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
  activities: Activity[],
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

// Get the most recent activity date
export const getMostRecentActivityDate = (activities: Activity[]) => {
  if (!activities || activities.length === 0) return null;

  const sortedActivities = activities
    .slice()
    .sort(
      (a, b) =>
        new Date(b.activity_date).getTime() -
        new Date(a.activity_date).getTime(),
    );

  return new Date(sortedActivities[0].activity_date);
};

// Hook to determine loading states for different time periods
export const useLoadingStates = (
  activities: Activity[],
  isValidating: boolean,
  today: Date,
) => {
  const mostRecentActivity = getMostRecentActivityDate(activities);

  return {
    // For week view: show loading for days after most recent activity in current week
    shouldShowWeekDayLoading: (date: string) => {
      if (!isValidating || !mostRecentActivity) return false;

      const dateObj = new Date(date);
      const isCurrentWeek = isThisWeek(dateObj, { weekStartsOn: 1 });

      // Only show loading for current week dates after most recent activity
      if (!isCurrentWeek) return false;

      return dateObj > mostRecentActivity;
    },

    // For month view: show loading for current month days after most recent activity
    shouldShowMonthDayLoading: (
      date: string,
      currentMonth: number,
      currentYear: number,
    ) => {
      if (!isValidating || !mostRecentActivity) return false;

      const dateObj = new Date(date);
      const isCurrentMonth =
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      // Only show loading for current month dates after most recent activity
      if (!isCurrentMonth) return false;

      return dateObj > mostRecentActivity;
    },

    // For year view: show loading indicator only for current year
    shouldShowYearLoading: (year: number) => {
      if (!isValidating) return false;
      return year === today.getFullYear();
    },

    // For all-time view: show subtle loading indicator
    shouldShowAllTimeLoading: () => isValidating,

    // Check if we should show the main page loading (only on initial load with no data)
    shouldShowMainLoading: () =>
      isValidating && (!activities || activities.length === 0),
  };
};
