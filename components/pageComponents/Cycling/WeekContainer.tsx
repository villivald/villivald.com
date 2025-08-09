import {
  addDays,
  endOfWeek,
  format,
  isSameDay,
  isThisWeek,
  subDays,
} from "date-fns";
import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import styles from "../../../styles/Cycling.module.css";
import TotalComponent from "./TotalComponent";
import { WeekContainerProps } from "./types";
import {
  activitiesOfDay,
  activitiesOfWeek,
  getAverageSpeedOfPeriod,
  getDatesOfCurrentWeek,
  getDistanceOfDay,
  getTotalElevationGainOfPeriod,
  getTotalMovingTimeInHoursMinutesAndSeconds,
  getTypeOfActivity,
} from "./utils";

export default function WeekContainer({
  today,
  theme,
  activities,
  shouldShowWeekDayLoading,
}: WeekContainerProps) {
  const intl = useIntl();

  const [currentBaseDate, setCurrentBaseDate] = useState(today);

  useEffect(() => {
    setCurrentBaseDate(today);
  }, [today]);

  const handlePreviousWeek = () => {
    setCurrentBaseDate((prevDate) => subDays(prevDate, 7));
  };

  const handleNextWeek = () => {
    setCurrentBaseDate((prevDate) => addDays(prevDate, 7));
  };

  const handleBackToCurrentWeek = () => {
    setCurrentBaseDate(today);
  };

  const isCurrentWeek = isThisWeek(currentBaseDate, { weekStartsOn: 1 });

  return (
    <section>
      <span className={styles.navigation} data-theme={theme}>
        <button onClick={handlePreviousWeek}>
          <Image
            src="/emojis/arrowLeft.svg"
            alt={intl.formatMessage({ id: "previousWeek" })}
            width={20}
            height={20}
          />
        </button>

        <h2>
          {isCurrentWeek ? (
            <FormattedMessage id="currentWeek" />
          ) : (
            `${format(
              subDays(endOfWeek(currentBaseDate, { weekStartsOn: 1 }), 6),
              "dd.MM",
            )}
            -
            ${format(endOfWeek(currentBaseDate, { weekStartsOn: 1 }), "dd.MM")}`
          )}
        </h2>

        <button onClick={handleNextWeek} disabled={isCurrentWeek}>
          <Image
            src="/emojis/arrowRight.svg"
            alt={intl.formatMessage({ id: "nextWeek" })}
            width={20}
            height={20}
          />
        </button>
        {!isCurrentWeek && (
          <button onClick={handleBackToCurrentWeek} disabled={isCurrentWeek}>
            <Image
              src="/emojis/reset.svg"
              alt={intl.formatMessage({ id: "backToCurrentWeek" })}
              width={20}
              height={20}
            />
          </button>
        )}
      </span>

      <div>
        <div className={styles.daysContainer}>
          {getDatesOfCurrentWeek(currentBaseDate).map((date, index) => (
            <p key={index}>{format(date, "d")}</p>
          ))}
        </div>

        <div className={styles.weekContainer}>
          {getDatesOfCurrentWeek(currentBaseDate).map((date, index) => {
            const distance = getDistanceOfDay(
              date,
              activitiesOfWeek(currentBaseDate, activities),
            );
            const typeOfActivity = getTypeOfActivity(
              date,
              activitiesOfWeek(currentBaseDate, activities),
            );

            const cellIsLoading = shouldShowWeekDayLoading(date);

            return (
              <p
                key={index}
                className={cellIsLoading ? styles.cellLoading : ""}
                data-today={isSameDay(date, today)}
                data-empty={distance === "0.00"}
                data-content={`💨${getAverageSpeedOfPeriod(
                  activitiesOfDay(date, activities),
                )}km/h\n⛰️${getTotalElevationGainOfPeriod(
                  activitiesOfDay(date, activities),
                )}m\n⏱️${getTotalMovingTimeInHoursMinutesAndSeconds(
                  activitiesOfDay(date, activities),
                )}`}
                data-color={parseFloat(distance) > 40}
                data-invertcolor={
                  parseFloat(distance) < 20 && distance !== "0.00"
                }
                style={
                  {
                    "--distance": parseFloat(distance) / 110,
                    position: "relative",
                  } as CSSProperties
                }
              >
                <span>
                  <FormattedMessage id={`day.${format(date, "E")}`} />
                </span>
                {distance} km
                {typeOfActivity && (
                  <span
                    className={styles.activityType}
                    data-activitytype={typeOfActivity}
                  >
                    <Image
                      src={`/emojis/${typeOfActivity === "Ride" ? "tree" : "zwift"}.svg`}
                      alt={intl.formatMessage({
                        id:
                          typeOfActivity === "Ride"
                            ? "alt.outdoorRide"
                            : "alt.zwiftRide",
                      })}
                      width={20}
                      height={20}
                    />
                  </span>
                )}
              </p>
            );
          })}
        </div>

        <TotalComponent
          params={activitiesOfWeek(currentBaseDate, activities)}
        />
      </div>
    </section>
  );
}
