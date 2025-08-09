import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import useSWR, { Fetcher } from "swr";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Cycling.module.css";
import Spinner from "../../Spinner";
import AllTimeContainer from "./AllTimeContainer";
import MonthContainer from "./MonthContainer";
import { Activity } from "./types";
import { useDynamicToday, useLoadingStates } from "./utils";
import WeekContainer from "./WeekContainer";
import YearContainer from "./YearContainer";

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

  const loadingStates = useLoadingStates(data || [], isValidating, today);

  if (error) return <FormattedMessage id="failedToLoad" />;

  return (
    <div
      className={`${styles.mainContainer} ${loadingStates.shouldShowMainLoading() ? styles.loading : ""}`}
      data-theme={theme}
    >
      {loadingStates.shouldShowMainLoading() && <Spinner />}
      <WeekContainer
        today={today}
        theme={theme}
        activities={data || []}
        shouldShowWeekDayLoading={loadingStates.shouldShowWeekDayLoading}
      />
      <MonthContainer
        today={today}
        theme={theme}
        activities={data || []}
        shouldShowMonthDayLoading={loadingStates.shouldShowMonthDayLoading}
      />
      <YearContainer
        today={today}
        theme={theme}
        activities={data || []}
        shouldShowYearLoading={loadingStates.shouldShowYearLoading}
      />
      <AllTimeContainer
        today={today}
        theme={theme}
        activities={data || []}
        shouldShowAllTimeLoading={loadingStates.shouldShowAllTimeLoading}
      />
    </div>
  );
}
