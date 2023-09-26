import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import data from "./data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const booksPerYear = (year: string) => {
  return data.books.filter((book) => book.date.includes(year)).length;
};

export const chartData = {
  labels: ["2023", "2022", "2021", "2020", "2019"],
  datasets: [
    {
      label: "Books per year",
      data: [
        booksPerYear("2023"),
        booksPerYear("2022"),
        booksPerYear("2021"),
        booksPerYear("2020"),
        booksPerYear("2019"),
      ],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
      borderColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return <Doughnut data={chartData} />;
}
