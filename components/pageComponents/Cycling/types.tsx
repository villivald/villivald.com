export type Activity = {
  activity_date: string;
  distance: string;
  average_speed: string;
  total_elevation_gain: string;
  moving_time: number;
  type: string;
};

// Base props for all containers
type BaseContainerProps = {
  today: Date;
  activities: Activity[];
  theme: string;
};

// Specific container prop types
export type WeekContainerProps = BaseContainerProps & {
  shouldShowWeekDayLoading: (date: string) => boolean;
};

export type MonthContainerProps = BaseContainerProps & {
  shouldShowMonthDayLoading: (
    date: string,
    currentMonth: number,
    currentYear: number,
  ) => boolean;
};

export type YearContainerProps = BaseContainerProps & {
  shouldShowYearLoading: (year: number) => boolean;
};

export type AllTimeContainerProps = BaseContainerProps & {
  shouldShowAllTimeLoading: () => boolean;
};
