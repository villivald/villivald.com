import { CSSProperties } from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../../styles/Cycling.module.css";
import TotalComponent from "./TotalComponent";
import { ContainerProps } from "./types";
import {
  activitiesOfYear,
  getAverageSpeedOfPeriod,
  getTotalDistanceOfPeriod,
  getTotalElevationGainOfPeriod,
  getTotalMovingTimeInHoursMinutesAndSeconds,
  yearsOfActivities,
} from "./utils";

export default function AllTimeContainer({
  today,
  activities,
}: ContainerProps) {
  return (
    <section>
      <h2>
        <FormattedMessage id="allTime" />
      </h2>
      <div>
        <div className={styles.allTimeContainer}>
          {yearsOfActivities(activities)?.map((year, index) => {
            const distance = parseFloat(
              getTotalDistanceOfPeriod(activitiesOfYear(year, activities)),
            );

            return (
              <p
                key={index}
                data-thisyear={year === today.getFullYear()}
                className={styles.yearItem}
                data-content={`💨 ${getAverageSpeedOfPeriod(
                  activitiesOfYear(year, activities),
                )}km/h\n⛰️ ${getTotalElevationGainOfPeriod(
                  activitiesOfYear(year, activities),
                )}m\n⏱️ ${getTotalMovingTimeInHoursMinutesAndSeconds(
                  activitiesOfYear(year, activities),
                )}`}
                data-color={distance > 5000}
                data-invertcolor={distance < 2500}
                style={
                  {
                    "--distance": distance / 12000,
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
