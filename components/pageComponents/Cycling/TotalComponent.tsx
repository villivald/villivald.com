import {
  getTotalDistanceOfPeriod,
  getAverageSpeedOfPeriod,
  getTotalElevationGainOfPeriod,
} from "./utils";
import { Activity } from "./types";
import styles from "../../../styles/Cycling.module.css";

export default function TotalComponent({ params }: { params: Activity[] }) {
  return (
    <div className={styles.totalContainer}>
      <p>Total distance: {getTotalDistanceOfPeriod(params)} km</p>
      <p>Average speed: {getAverageSpeedOfPeriod(params)} km/h</p>
      <p>Total elevation gain: {getTotalElevationGainOfPeriod(params)} m</p>
    </div>
  );
}
