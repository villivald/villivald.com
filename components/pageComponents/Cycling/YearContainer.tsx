import { isSameMonth } from "date-fns";

import TotalComponent from "./TotalComponent";
import {
  months,
  currentYearActivities,
  getMonthlyDistances,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  activitiesOfMonth,
} from "./utils";
import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function YearContainer({ today, activities }: ContainerProps) {
  return (
    <section>
      <h2>Current Year</h2>
      <div>
        <div className={styles.yearContainer}>
          {Object.keys(months).map((_key, index) => {
            const distance = getMonthlyDistances(
              currentYearActivities(activities)
            )[index];

            return (
              <p
                key={index}
                data-thismonth={isSameMonth(
                  today,
                  new Date(today.getFullYear(), index)
                )}
                data-empty={distance === "0.00"}
                data-content={`💨${getAverageSpeedOfPeriod(
                  activitiesOfMonth(index, today.getFullYear(), activities)
                )}km/h\n⛰️${getTotalElevationGainOfPeriod(
                  activitiesOfMonth(index, today.getFullYear(), activities)
                )}m`}
              >
                <span>{months[index].slice(0, 3)}</span>
                {distance} km
              </p>
            );
          })}
        </div>
        <TotalComponent params={currentYearActivities(activities)} />
      </div>
    </section>
  );
}
