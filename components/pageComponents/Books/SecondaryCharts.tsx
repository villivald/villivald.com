import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useIntl } from "react-intl";

import styles from "../../../styles/Books.module.css";
import data from "./data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Book {
  date: string;
  language?: string;
  category?: string;
}

export default function CategoryCharts({ type }: { type: string }) {
  const formatData = (year: string, param: string) => {
    return data.books.filter(
      (book: Book) =>
        book.date.includes(year) && book[type as keyof Book] === param,
    ).length;
  };

  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];
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
          <div key={year} className={styles.doughnutChart}>
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
