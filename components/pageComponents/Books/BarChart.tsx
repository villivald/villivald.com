import { useContext, useMemo } from "react";
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

// Get the last three years dynamically
const availableYears = booksDataSets.map((year) => Object.keys(year)[0]);
const lastThreeYears = availableYears.slice(0, 3);

export default function BarChart() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const getPrimaryThemeColor = (theme: string) => {
    return theme === "dark" ? "#fff" : "hsl(236deg 21% 14%)";
  };

  const getSecondaryThemeColor = (theme: string) => {
    return theme === "dark" ? "hsl(258deg 10% 50%)" : "hsl(258deg 10% 75%)";
  };

  const options = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
          labels: { color: getPrimaryThemeColor(theme) },
        },
        title: { color: getPrimaryThemeColor(theme) },
        tooltip: {
          titleColor: getPrimaryThemeColor(theme),
          bodyColor: getPrimaryThemeColor(theme),
          backgroundColor: getPrimaryThemeColor(
            theme === "dark" ? "light" : "dark",
          ),
        },
      },
      scales: {
        x: {
          ticks: { color: getPrimaryThemeColor(theme) },
          grid: { color: getSecondaryThemeColor(theme) },
        },
        y: {
          ticks: { color: getPrimaryThemeColor(theme) },
          grid: { color: getSecondaryThemeColor(theme) },
        },
      },
    };
  }, [theme]);

  const books = useMemo(() => {
    return {
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
  }, []);

  return (
    <Bar
      options={options}
      data={books}
      aria-label={intl.formatMessage({ id: "aria.statistics.books" })}
    />
  );
}
