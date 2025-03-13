import { CSSProperties } from "react";
import { FormattedMessage } from "react-intl";

import TotalComponent from "./TotalComponent";
import {
  yearsOfActivities,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  activitiesOfYear,
  getTotalDistanceOfPeriod,
  getTotalMovingTimeInHoursMinutesAndSeconds,
} from "./utils";

import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

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
            const distance = getTotalDistanceOfPeriod(
              activitiesOfYear(year, activities),
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
                data-color={parseFloat(distance) > 5000}
                data-invertcolor={parseFloat(distance) < 2500}
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
