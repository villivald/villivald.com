import { CSSProperties } from "react";
import { format, isSameDay } from "date-fns";

import TotalComponent from "./TotalComponent";
import {
  getDatesOfCurrentWeek,
  currentWeekActivities,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getDistanceOfDay,
  activitiesOfDay,
} from "./utils";
import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function WeekContainer({ today, activities }: ContainerProps) {
  return (
    <section>
      <h2>Current Week</h2>
      <div>
        <div className={styles.daysContainer}>
          {getDatesOfCurrentWeek(today).map((date, index) => (
            <p key={index}>{format(date, "d")}</p>
          ))}
        </div>
        <div className={styles.weekContainer}>
          {getDatesOfCurrentWeek(today).map((date, index) => {
            const distance = getDistanceOfDay(
              date,
              currentWeekActivities(activities)
            );
            return (
              <p
                key={index}
                data-today={isSameDay(date, today)}
                data-empty={distance === "0.00"}
                data-content={`💨${getAverageSpeedOfPeriod(
                  activitiesOfDay(date, activities)
                )}km/h\n⛰️${getTotalElevationGainOfPeriod(
                  activitiesOfDay(date, activities)
                )}m`}
                data-color={parseFloat(distance) > 40}
                style={
                  { "--distance": parseFloat(distance) / 110 } as CSSProperties
                }
              >
                <span>{format(date, "E")}</span>
                {distance} km
              </p>
            );
          })}
        </div>
        <TotalComponent params={currentWeekActivities(activities)} />
      </div>
    </section>
  );
}
