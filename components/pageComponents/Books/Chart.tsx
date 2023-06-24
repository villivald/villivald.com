import React from "react";
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

import data from "./data.json";

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
    title: {
      display: true,
      text: "Chart.js Bar Chart",
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
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2022",
      data: handleData("2022"),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "2021",
      data: handleData("2021"),
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
    {
      label: "2020",
      data: handleData("2020"),
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "2019",
      data: handleData("2019"),
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={books} />;
}
