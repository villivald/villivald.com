import Image from "next/image";
import { CSSProperties, useState, useContext } from "react";
import {
  format,
  isSameDay,
  addDays,
  subDays,
  endOfWeek,
  isThisWeek,
} from "date-fns";
import { FormattedMessage } from "react-intl";

import TotalComponent from "./TotalComponent";
import {
  getDatesOfCurrentWeek,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getDistanceOfDay,
  activitiesOfDay,
  activitiesOfWeek,
} from "./utils";
import { ContainerProps } from "./types";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Cycling.module.css";

export default function WeekContainer({ today, activities }: ContainerProps) {
  const theme = useContext(ThemeContext);

  const [currentBaseDate, setCurrentBaseDate] = useState(today);

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
            alt="Previous week"
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
              "dd.MM"
            )}
            -
            ${format(endOfWeek(currentBaseDate, { weekStartsOn: 1 }), "dd.MM")}`
          )}
        </h2>

        <button onClick={handleNextWeek} disabled={isCurrentWeek}>
          <Image
            src="/emojis/arrowRight.svg"
            alt="Next week"
            width={20}
            height={20}
          />
        </button>
        {!isCurrentWeek && (
          <button onClick={handleBackToCurrentWeek} disabled={isCurrentWeek}>
            <Image
              src="/emojis/reset.svg"
              alt="Back to current week"
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
              activitiesOfWeek(currentBaseDate, activities)
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
                data-color={parseFloat(distance) > 40}
                data-invertcolor={
                  parseFloat(distance) < 10 && distance !== "0.00"
                }
                style={
                  { "--distance": parseFloat(distance) / 110 } as CSSProperties
                }
              >
                <span>
                  <FormattedMessage id={`day.${format(date, "E")}`} />
                </span>
                {distance} km
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
