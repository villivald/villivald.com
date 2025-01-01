import { CSSProperties } from "react";
import { isSameMonth } from "date-fns";
import { FormattedMessage } from "react-intl";

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
      <h2>
        <FormattedMessage id="currentYear" />
      </h2>
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
                data-content={`💨 ${getAverageSpeedOfPeriod(
                  activitiesOfMonth(index, today.getFullYear(), activities)
                )}km/h\n⛰️ ${getTotalElevationGainOfPeriod(
                  activitiesOfMonth(index, today.getFullYear(), activities)
                )}m`}
                data-color={parseFloat(distance) > 600}
                data-invertcolor={
                  parseFloat(distance) < 150 && distance !== "0.00"
                }
                style={
                  { "--distance": parseFloat(distance) / 1500 } as CSSProperties
                }
              >
                <span>
                  <FormattedMessage id={`month.${months[index].slice(0, 3)}`} />
                </span>
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
