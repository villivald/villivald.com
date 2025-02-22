import { FormattedMessage, useIntl } from "react-intl";

import {
  getTotalDistanceOfPeriod,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
  getTotalMovingTimeInHoursAndMinutes,
} from "./utils";

import { Activity } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function TotalComponent({ params }: { params: Activity[] }) {
  const intl = useIntl();

  return (
    <div className={styles.totalContainer}>
      <p>
        <FormattedMessage id="totalDistance" />:{" "}
        {getTotalDistanceOfPeriod(params)} km
      </p>
      <p>
        <FormattedMessage id="averageSpeed" />:{" "}
        {getAverageSpeedOfPeriod(params)} km/h
      </p>
      <p>
        <FormattedMessage id="totalElevationGain" />:{" "}
        {getTotalElevationGainOfPeriod(params)} m
      </p>
      <p>
        <FormattedMessage id="totalMovingTime" />:{" "}
        {getTotalMovingTimeInHoursAndMinutes(
          params,
          intl.formatMessage({ id: "hour" }),
          intl.formatMessage({ id: "minute" }),
        )}
      </p>
    </div>
  );
}
