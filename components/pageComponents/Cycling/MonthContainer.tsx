import { CSSProperties } from "react";
import { format, isSameDay } from "date-fns";

import TotalComponent from "./TotalComponent";
import {
  weekDays,
  getDatesOfCurrentMonth,
  currentMonthActivities,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getDistanceOfDay,
  activitiesOfDay,
} from "./utils";
import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function MonthContainer({ today, activities }: ContainerProps) {
  return (
    <section>
      <h2>Current Month</h2>
      <div>
        <div className={styles.daysContainer}>
          {weekDays.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </div>
        <div className={styles.monthContainer}>
          {getDatesOfCurrentMonth(today).map((date, index) => {
            if (!date) {
              return <p key={index} data-blank={true}></p>;
            }

            const distance = getDistanceOfDay(
              date,
              currentMonthActivities(activities)
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
                style={
                  { "--distance": parseFloat(distance) / 120 } as CSSProperties
                }
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
  );
}
