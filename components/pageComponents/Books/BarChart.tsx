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

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

const books = {
  labels,
  datasets: [
    {
      label: "2023",
      data: handleData("2023"),
      backgroundColor: "#003f5c",
    },
    {
      label: "2022",
      data: handleData("2022"),
      backgroundColor: "#58508d",
    },
    {
      label: "2021",
      data: handleData("2021"),
      backgroundColor: "#bc5090",
    },
    {
      label: "2020",
      data: handleData("2020"),
      backgroundColor: "#ff6361",
    },
    {
      label: "2019",
      data: handleData("2019"),
      backgroundColor: "#ffa600",
    },
  ],
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
