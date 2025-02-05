import Image from "next/image";
import { CSSProperties, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { format, isSameDay, addMonths, subMonths } from "date-fns";

import TotalComponent from "./TotalComponent";
import {
  weekDays,
  getDatesOfCurrentMonth,
  activitiesOfMonth,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getDistanceOfDay,
  activitiesOfDay,
} from "./utils";

import { ContainerProps } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function MonthContainer({
  today,
  theme,
  activities,
}: ContainerProps) {
  const intl = useIntl();

  const [currentBaseDate, setCurrentBaseDate] = useState(today);

  const currentMonth = currentBaseDate.getMonth();
  const currentYear = currentBaseDate.getFullYear();

  const handlePreviousMonth = () => {
    setCurrentBaseDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentBaseDate((prevDate) => addMonths(prevDate, 1));
  };

  const handleBackToCurrentMonth = () => {
    setCurrentBaseDate(today);
  };

  const isCurrentMonth = currentMonth === today.getMonth();

  return (
    <section>
      <span className={styles.navigation} data-theme={theme}>
        <button onClick={handlePreviousMonth}>
          <Image
            src="/emojis/arrowLeft.svg"
            alt={intl.formatMessage({ id: "previousMonth" })}
            width={20}
            height={20}
          />
        </button>

        <h2>
          {isCurrentMonth ? (
            <FormattedMessage id="currentMonth" />
          ) : (
            `${format(currentBaseDate, "MM")}/${currentYear}`
          )}
        </h2>

        <button onClick={handleNextMonth} disabled={isCurrentMonth}>
          <Image
            src="/emojis/arrowRight.svg"
            alt={intl.formatMessage({ id: "nextMonth" })}
            width={20}
            height={20}
          />
        </button>
        {!isCurrentMonth && (
          <button onClick={handleBackToCurrentMonth} disabled={isCurrentMonth}>
            <Image
              src="/emojis/reset.svg"
              alt={intl.formatMessage({ id: "backToCurrentMonth" })}
              width={20}
              height={20}
            />
          </button>
        )}
      </span>

      <div>
        <div className={styles.daysContainer}>
          {weekDays.map((day, index) => (
            <p key={index}>
              <FormattedMessage id={`day.${day}`} />
            </p>
          ))}
        </div>
        <div className={styles.monthContainer}>
          {getDatesOfCurrentMonth(currentBaseDate).map((date, index) => {
            if (!date) {
              return <p key={index} data-blank={true}></p>;
            }

            const distance = getDistanceOfDay(
              date,
              activitiesOfMonth(currentMonth, currentYear, activities),
            );
            return (
              <p
                key={index}
                data-today={isSameDay(date, today)}
                data-empty={distance === "0.00"}
                data-content={`💨${getAverageSpeedOfPeriod(
                  activitiesOfDay(date, activities),
                )}km/h\n⛰️${getTotalElevationGainOfPeriod(
                  activitiesOfDay(date, activities),
                )}m`}
                data-color={parseFloat(distance) > 40}
                data-invertcolor={
                  parseFloat(distance) < 20 && distance !== "0.00"
                }
                style={
                  { "--distance": parseFloat(distance) / 110 } as CSSProperties
                }
              >
                <span>{format(date, "dd")}</span>
                {distance} km
              </p>
            );
          })}
        </div>
        <TotalComponent
          params={activitiesOfMonth(currentMonth, currentYear, activities)}
        />
      </div>
    </section>
  );
}
