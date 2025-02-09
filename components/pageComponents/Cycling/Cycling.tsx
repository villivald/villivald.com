import { GetServerSideProps } from "next";
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

export default function Cycling({
  initialData = [],
}: {
  initialData?: Activity[];
}) {
  const theme = useContext(ThemeContext);
  const today = useDynamicToday();

  const {
    data = initialData,
    error,
    isValidating,
  } = useSWR<Activity[]>("/api/strava/activities", fetcher, {
    fallbackData: initialData,
    revalidateOnFocus: false,
    revalidateIfStale: true,
    revalidateOnReconnect: true,
    dedupingInterval: 60 * 1000,
  });

  if (error) return <FormattedMessage id="failedToLoad" />;

  return (
    <div
      className={`${styles.mainContainer} ${isValidating ? styles.loading : ""}`}
      data-theme={theme}
    >
      {isValidating && <Spinner />}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("/api/strava/activities");
  const data = await res.json();

  return { props: { initialData: data } };
};
