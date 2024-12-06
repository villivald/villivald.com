import { CSSProperties } from "react";

import TotalComponent from "./TotalComponent";
import {
  yearsOfActivities,
  getYearlyDistance,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  activitiesOfYear,
} from "./utils";
import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function AllTimeContainer({
  today,
  activities,
}: ContainerProps) {
  return (
    <section>
      <h2>All Time</h2>
      <div>
        <div className={styles.allTimeContainer}>
          {yearsOfActivities(activities).map((year, index) => {
            const distance = getYearlyDistance(year, activities);

            return (
              <p
                key={index}
                data-thisyear={year === today.getFullYear()}
                className={styles.yearItem}
                data-content={`💨${getAverageSpeedOfPeriod(
                  activitiesOfYear(year, activities)
                )}km/h\n⛰️${getTotalElevationGainOfPeriod(
                  activitiesOfYear(year, activities)
                )}m`}
                style={
                  {
                    "--distance": parseFloat(distance) / 12000,
                  } as CSSProperties
                }
              >
                <span>{year}</span>
                {distance} km
              </p>
            );
          })}
        </div>
        <TotalComponent params={activities} />
      </div>
    </section>
  );
}
