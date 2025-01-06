import Image from "next/image";
import { CSSProperties, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { isSameMonth, subYears, addYears } from "date-fns";

import TotalComponent from "./TotalComponent";
import {
  months,
  activitiesOfYear,
  getMonthlyDistances,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  activitiesOfMonth,
} from "./utils";

import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function YearContainer({
  today,
  theme,
  activities,
}: ContainerProps) {
  const intl = useIntl();

  const [currentBaseDate, setCurrentBaseDate] = useState(today);

  const currentYear = currentBaseDate.getFullYear();

  const handlePreviousYear = () => {
    setCurrentBaseDate((prevDate) => subYears(prevDate, 1));
  };

  const handleNextYear = () => {
    setCurrentBaseDate((prevDate) => addYears(prevDate, 1));
  };

  const handleBackToCurrentYear = () => {
    setCurrentBaseDate(today);
  };

  const isCurrentYear = currentYear === today.getFullYear();

  return (
    <section>
      <span className={styles.navigation} data-theme={theme}>
        <button onClick={handlePreviousYear}>
          <Image
            src="/emojis/arrowLeft.svg"
            alt={intl.formatMessage({ id: "previousYear" })}
            width={20}
            height={20}
          />
        </button>

        <h2>
          {isCurrentYear ? <FormattedMessage id="currentYear" /> : currentYear}
        </h2>

        <button onClick={handleNextYear} disabled={isCurrentYear}>
          <Image
            src="/emojis/arrowRight.svg"
            alt={intl.formatMessage({ id: "nextYear" })}
            width={20}
            height={20}
          />
        </button>
        {!isCurrentYear && (
          <button onClick={handleBackToCurrentYear} disabled={isCurrentYear}>
            <Image
              src="/emojis/reset.svg"
              alt={intl.formatMessage({ id: "backToCurrentYear" })}
              width={20}
              height={20}
            />
          </button>
        )}
      </span>

      <div>
        <div className={styles.yearContainer}>
          {Object.keys(months).map((_key, index) => {
            const distance = getMonthlyDistances(
              activitiesOfYear(currentYear, activities)
            )[index];

            return (
              <p
                key={index}
                data-thismonth={isSameMonth(
                  currentBaseDate,
                  new Date(today.getFullYear(), index)
                )}
                data-empty={distance === "0.00"}
                data-content={`💨 ${getAverageSpeedOfPeriod(
                  activitiesOfMonth(
                    index,
                    currentBaseDate.getFullYear(),
                    activities
                  )
                )}km/h\n⛰️ ${getTotalElevationGainOfPeriod(
                  activitiesOfMonth(
                    index,
                    currentBaseDate.getFullYear(),
                    activities
                  )
                )}m`}
                data-color={parseFloat(distance) > 600}
                data-invertcolor={
                  parseFloat(distance) < 250 && distance !== "0.00"
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
        <TotalComponent params={activitiesOfYear(currentYear, activities)} />
      </div>
    </section>
  );
}
