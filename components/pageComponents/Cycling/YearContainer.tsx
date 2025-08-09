import { addYears, isSameMonth, subYears } from "date-fns";
import Image from "next/image";
import { CSSProperties, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import styles from "../../../styles/Cycling.module.css";
import TotalComponent from "./TotalComponent";
import { YearContainerProps } from "./types";
import {
  activitiesOfMonth,
  activitiesOfYear,
  getAverageSpeedOfPeriod,
  getMonthlyDistances,
  getTotalElevationGainOfPeriod,
  getTotalMovingTimeInHoursMinutesAndSeconds,
  months,
} from "./utils";

export default function YearContainer({
  today,
  theme,
  activities,
  shouldShowYearLoading,
}: YearContainerProps) {
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
        <button onClick={handlePreviousYear} disabled={currentYear === 2019}>
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
        <div
          className={`${styles.yearContainer} ${isCurrentYear && shouldShowYearLoading(currentYear) ? styles.containerLoading : ""}`}
        >
          {Object.keys(months).map((_key, index) => {
            const distance = getMonthlyDistances(
              activitiesOfYear(currentYear, activities),
            )[index];

            const cellIsLoading =
              isCurrentYear &&
              shouldShowYearLoading(currentYear) &&
              index === today.getMonth();

            return (
              <p
                key={index}
                className={cellIsLoading ? styles.cellLoading : ""}
                data-thismonth={isSameMonth(
                  currentBaseDate,
                  new Date(today.getFullYear(), index),
                )}
                data-empty={distance === "0.00"}
                data-content={`💨 ${getAverageSpeedOfPeriod(
                  activitiesOfMonth(
                    index,
                    currentBaseDate.getFullYear(),
                    activities,
                  ),
                )}km/h\n⛰️ ${getTotalElevationGainOfPeriod(
                  activitiesOfMonth(
                    index,
                    currentBaseDate.getFullYear(),
                    activities,
                  ),
                )}m\n⏱️ ${getTotalMovingTimeInHoursMinutesAndSeconds(
                  activitiesOfMonth(
                    index,
                    currentBaseDate.getFullYear(),
                    activities,
                  ),
                )}`}
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
