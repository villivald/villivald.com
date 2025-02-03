import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useIntl } from "react-intl";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryCharts({ type }: { type: string }) {
  const formatData = (year: string, param: string) => {
    return data.books.filter(
      // @ts-ignore: Should check in the future
      (book) => book.date.includes(year) && book[type] === param,
    ).length;
  };

  const years = ["2024", "2023", "2022", "2021", "2020"];
  const intl = useIntl();

  const labels =
    type === "language"
      ? [
          intl.formatMessage({ id: "english" }),
          intl.formatMessage({ id: "finnish" }),
          intl.formatMessage({ id: "russian" }),
        ]
      : [
          intl.formatMessage({ id: "fiction" }),
          intl.formatMessage({ id: "non-fiction" }),
        ];

  const formattedData = (year: string) => {
    return type === "language"
      ? [formatData(year, "en"), formatData(year, "fi"), formatData(year, "ru")]
      : [formatData(year, "fiction"), formatData(year, "non-fiction")];
  };

  return (
    <div>
      {years.map((year) => {
        return (
          <div key={year} className={styles.languageChart}>
            <h2>
              {year} <span>(</span>
              {data.books.filter((book) => book.date.includes(year)).length}
              <span>)</span>
            </h2>
            <Doughnut
              aria-label={`${intl.formatMessage({
                id: `aria.statistics.${type}`,
              })} ${year}`}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Books per year",
                    data: formattedData(year),
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
