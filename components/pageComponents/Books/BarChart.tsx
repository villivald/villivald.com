import { useContext } from "react";
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
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const monthLabels = Array.from({ length: 12 }, (_, month) => {
  return new Date(0, month).toLocaleString("en-US", { month: "long" });
});

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
  { "2024": "#050909" },
  { "2023": "#003f5c" },
  { "2022": "#58508d" },
  { "2021": "#bc5090" },
  { "2020": "#ff6361" },
  { "2019": "#ffa600" },
];

const books = {
  labels: monthLabels,
  datasets: booksDataSets.map((year) => {
    return {
      label: Object.keys(year)[0],
      data: handleData(Object.keys(year)[0]),
      backgroundColor: Object.values(year)[0],
    };
  }),
};

export default function BarChart() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  if (theme === "dark") {
    ChartJS.defaults.color = "#fff";
  } else {
    ChartJS.defaults.color = "#1c1d2b";
  }

  return (
    <Bar
      options={options}
      data={books}
      aria-label={intl.formatMessage({ id: "aria.statistics.books" })}
    />
  );
}
