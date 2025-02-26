import { useContext, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useIntl } from "react-intl";

import data from "./data.json";
import { ThemeContext } from "../../../context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const monthLabels = Array.from({ length: 12 }, (_, month) =>
  new Date(0, month).toLocaleString("en-US", { month: "long" }),
);

const handleData = (year: string) => {
  return data.books
    .filter((book) => book.date.includes(year))
    .reduce((acc, book) => {
      const month = parseInt(book.date.split(".")[1]);
      //return amount of books read in each month
      acc[month - 1] = acc[month - 1] ? acc[month - 1] + 1 : 1;
      return acc;
    }, Array(12).fill(0));
};

const booksDataSets = [
  { "2025": "#f58231" },
  { "2024": "#bc5090" },
  { "2023": "#003f5c" },
  { "2022": "#58508d" },
  { "2021": "#050909" },
  { "2020": "#ff6361" },
  { "2019": "#ffa600" },
];

// Get the last two years dynamically
const availableYears = booksDataSets.map((year) => Object.keys(year)[0]);
const lastThreeYears = availableYears.slice(0, 3);

const books = {
  labels: monthLabels,
  datasets: booksDataSets.map((year) => {
    const yearLabel = Object.keys(year)[0];
    return {
      label: yearLabel,
      data: handleData(yearLabel),
      backgroundColor: Object.values(year)[0],
      hidden: !lastThreeYears.includes(yearLabel),
    };
  }),
};

export default function BarChart() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  useEffect(() => {
    ChartJS.defaults.color = theme === "dark" ? "#fff" : "#1c1d2b";
  }, [theme]);

  return (
    <Bar
      options={options}
      data={books}
      aria-label={intl.formatMessage({ id: "aria.statistics.books" })}
    />
  );
}
