import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import data from "./data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemper",
  "October",
  "November",
  "December",
];

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Books",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
  },
};

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
      borderColor: "red",
      backgroundColor: "pink",
      yAxisID: "y",
    },
    {
      label: "2022",
      data: handleData("2022"),
      borderColor: "plum",
      backgroundColor: "cobalt",
      yAxisID: "y",
    },
    {
      label: "2021",
      data: handleData("2021"),
      borderColor: "blue",
      backgroundColor: "lightblue",
      yAxisID: "y",
    },
    {
      label: "2020",
      data: handleData("2020"),
      borderColor: "green",
      backgroundColor: "lightgreen",
      yAxisID: "y",
    },
    {
      label: "2019",
      data: handleData("2019"),
      borderColor: "yellow",
      backgroundColor: "lightyellow",
      yAxisID: "y",
    },
  ],
};

const YearsChart = () => {
  return <Line options={options} data={books} />;
};

export default YearsChart;
