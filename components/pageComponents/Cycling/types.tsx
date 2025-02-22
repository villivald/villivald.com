export type Activity = {
  activity_date: string;
  distance: string;
  average_speed: string;
  total_elevation_gain: string;
  moving_time: number;
  type: string;
};

export type ContainerProps = {
  today: Date;
  activities: Activity[];
  theme: string;
};
