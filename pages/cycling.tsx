import { GetServerSideProps } from "next";

import CyclingComponent from "../components/pageComponents/Cycling/Cycling";
import { Activity } from "../components/pageComponents/Cycling/types";

interface CyclingPageProps {
  initialData: Activity[];
}

export default function Cycling({ initialData }: CyclingPageProps) {
  return <CyclingComponent initialData={initialData} />;
}

export const getServerSideProps: GetServerSideProps<CyclingPageProps> = async ({
  req,
}) => {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const res = await fetch(`${protocol}://${host}/api/strava/activities`);
    const data: Activity[] = await res.json();

    const currentYear = new Date().getFullYear();
    const initialData = Array.isArray(data)
      ? data.filter(
          (a) => new Date(a.activity_date).getFullYear() === currentYear,
        )
      : [];

    return { props: { initialData } };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return { props: { initialData: [] } };
  }
};
