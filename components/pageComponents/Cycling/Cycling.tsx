import { useContext } from "react";
import useSWR, { Fetcher } from "swr";

import { useDynamicToday } from "./utils";
import { Activity } from "./types";
import { containers } from "./Containers";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Cycling.module.css";

const fetcher: Fetcher<Activity[]> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Cycling() {
  const theme = useContext(ThemeContext);
  const today = useDynamicToday();

  const { data, error } = useSWR<Activity[]>("/api/strava/activities", fetcher);

  // TODO: Add error and loading state handling
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.mainContainer} data-theme={theme}>
      {containers.map((Container, index) => (
        <Container key={index} today={today} activities={data} />
      ))}
    </div>
  );
}
