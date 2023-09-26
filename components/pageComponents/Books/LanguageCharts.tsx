import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useIntl } from "react-intl";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const booksInLanguagePerYear = (year: string, language: string) => {
  return data.books.filter(
    (book) => book.date.includes(year) && book.language === language
  ).length;
};

export default function LanguageCharts() {
  const years = ["2023", "2022", "2021", "2020"];
  const intl = useIntl();

  return (
    <div>
      {years.map((year) => {
        return (
          <div key={year} className={styles.languageChart}>
            <h2>{year}</h2>
            <Doughnut
              data={{
                labels: [
                  intl.formatMessage({ id: "english" }),
                  intl.formatMessage({ id: "finnish" }),
                  intl.formatMessage({ id: "russian" }),
                ],
                datasets: [
                  {
                    label: "Books per year",
                    data: [
                      booksInLanguagePerYear(year, "en"),
                      booksInLanguagePerYear(year, "fi"),
                      booksInLanguagePerYear(year, "ru"),
                    ],
                    backgroundColor: [
                      "hsl(10deg 94% 60%)",
                      "hsl(187deg 52% 22%)",
                      "hsl(24deg 71.4% 76.7%)",
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
