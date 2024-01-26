import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useIntl } from "react-intl";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const booksInCategoryPerYear = (year: string, category: string) => {
  return data.books.filter(
    (book) => book.date.includes(year) && book.category === category
  ).length;
};

export default function CategoryCharts() {
  const years = ["2024", "2023", "2022", "2021"];
  const intl = useIntl();

  return (
    <div>
      {years.map((year) => {
        return (
          <div key={year} className={styles.languageChart}>
            <h2>{year}</h2>
            <Doughnut
              aria-label={`${intl.formatMessage({
                id: "aria.statistics.category",
              })} ${year}`}
              data={{
                labels: [
                  intl.formatMessage({ id: "fiction" }),
                  intl.formatMessage({ id: "non-fiction" }),
                ],
                datasets: [
                  {
                    label: "Books per year",
                    data: [
                      booksInCategoryPerYear(year, "fiction"),
                      booksInCategoryPerYear(year, "non-fiction"),
                    ],
                    backgroundColor: [
                      "hsl(10deg 94% 60%)",
                      "hsl(187deg 52% 22%)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
