import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import useSWR, { Fetcher } from "swr";

import { useDynamicToday } from "./utils";
import { Activity } from "./types";
import { containers } from "./Containers";
import Spinner from "../../Spinner";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Cycling.module.css";

const fetcher: Fetcher<Activity[]> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Cycling() {
  const theme = useContext(ThemeContext);
  const today = useDynamicToday();

  const { data, error } = useSWR<Activity[]>("/api/strava/activities", fetcher);

  if (error) return <FormattedMessage id="failedToLoad" />;

  return (
    <div
      className={`${styles.mainContainer} ${!data ? styles.loading : ""}`}
      data-theme={theme}
    >
      {!data && <Spinner />}
      {containers.map((Container, index) => (
        <Container
          key={index}
          today={today}
          theme={theme}
          activities={data || []}
        />
      ))}
    </div>
  );
}
