import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import useSWR, { Fetcher, useSWRConfig } from "swr";

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
  const { mutate } = useSWRConfig();

  const dbOnlyUrl = "/api/strava/activities?dbOnly=1";

  // Fast DB-only data source for immediate render
  const {
    data = initialData,
    error,
    isValidating: isDbValidating,
  } = useSWR<Activity[]>(dbOnlyUrl, fetcher, {
    fallbackData: initialData,
    revalidateOnFocus: false,
    revalidateIfStale: true,
    revalidateOnReconnect: true,
    dedupingInterval: 60 * 1000,
  });

  // Background full sync to refresh DB, then revalidate fast data
  const [isSyncing, setIsSyncing] = useState(false);
  const [hasSynced, setHasSynced] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const runFullSync = async () => {
      if (cancelled || hasSynced) return;

      setIsSyncing(true);
      try {
        await fetch("/api/strava/activities");
        if (!cancelled) {
          await mutate(dbOnlyUrl);
          setHasSynced(true);
        }
      } catch {
        // ignore
      } finally {
        if (!cancelled) {
          setIsSyncing(false);
        }
      }
    };

    // Only run full sync after we have some initial data and haven't synced yet
    if (data && data.length > 0 && !hasSynced) {
      runFullSync();
    }

    return () => {
      cancelled = true;
      setIsSyncing(false);
    };
  }, [mutate, data, hasSynced]);

  const loadingStates = useLoadingStates(
    data || [],
    isSyncing, // Only show cell loading indicators during sync, not during initial DB validation
    today,
  );

  // Show initial spinner if we're validating and have no data yet
  const shouldShowInitialSpinner =
    isDbValidating && (!data || data.length === 0);

  if (error) return <FormattedMessage id="failedToLoad" />;

  return (
    <div
      className={`${styles.mainContainer} ${shouldShowInitialSpinner ? styles.loading : ""}`}
      data-theme={theme}
    >
      {shouldShowInitialSpinner && <Spinner />}
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
