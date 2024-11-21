import { useEffect, useState, useContext } from "react";
import { format, isSameDay } from "date-fns";
import {
  today,
  months,
  weekDays,
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

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Cycling.module.css";

export default function Cycling() {
  const theme = useContext(ThemeContext);

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
      <div className={styles.totalContainer}>
        <p>Total distance: {getTotalDistanceOfPeriod(params)} km</p>
        {/* TODO: Fix the average speed calculation*/}
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
    <div className={styles.mainContainer} data-theme={theme}>
      <section>
        <h2>Current Week</h2>
        <div>
          <div className={styles.daysContainer}>
            {getDatesOfCurrentWeek().map((date, index) => (
              <p key={index}>{format(date, "d")}</p>
            ))}
          </div>
          <div className={styles.weekContainer}>
            {getDatesOfCurrentWeek().map((date, index) => {
              const distance = getDistanceOfCurrentDay(
                date,
                currentWeekActivities(activities)
              );
              return (
                <p
                  key={index}
                  data-today={isSameDay(date, today)}
                  data-empty={distance === "0.00"}
                >
                  <span>{format(date, "E")}</span>
                  {distance}
                  km
                </p>
              );
            })}
          </div>
          <TotalComponent params={currentWeekActivities(activities)} />
        </div>
      </section>

      <section>
        <h2>Current Month</h2>
        <div>
          <div className={styles.daysContainer}>
            {weekDays.map((day, index) => (
              <p key={index}>{day}</p>
            ))}
          </div>
          <div className={styles.monthContainer}>
            {getDatesOfCurrentMonth().map((date, index) => {
              if (!date) {
                return <p key={index} data-blank={true}></p>;
              }

              const distance = getDistanceOfCurrentDay(
                date,
                currentMonthActivities(activities)
              );
              return (
                <p
                  key={index}
                  data-today={isSameDay(date, today)}
                  data-empty={distance === "0.00"}
                >
                  <span>{format(date, "dd")}</span>
                  {distance} km
                </p>
              );
            })}
          </div>
          <TotalComponent params={currentMonthActivities(activities)} />
        </div>
      </section>

      <section>
        <h2>Current Year</h2>
        <div>
          <div className={styles.yearContainer}>
            {Object.keys(months).map((key, index) => (
              <p key={index}>
                {months[parseInt(key, 10)]}
                {getMonthlyDistances(currentYearActivities(activities))[index]}
                km
              </p>
            ))}
          </div>
          <TotalComponent params={currentYearActivities(activities)} />
        </div>
      </section>

      <section>
        <h2>All Time</h2>
        <div>
          <div className={styles.allTimeContainer}>
            {yearsOfActivities(activities).map((year, index) => (
              <p key={index}>
                {year} - {getYearlyDistance(year, activities)}km
              </p>
            ))}
          </div>
          <TotalComponent params={activities} />
        </div>
      </section>
    </div>
  );
}
