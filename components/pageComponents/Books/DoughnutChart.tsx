import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useContext, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { useIntl } from "react-intl";

import { ThemeContext } from "../../../context";
import data from "./data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const booksPerYear = (year: string) => {
  return data.books.filter((book) => book.date.includes(year)).length;
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

// Define custom options with legend handler that works for all entries
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      onClick: function (
        _e: unknown,
        legendItem: import("chart.js").LegendItem,
        legend: { chart: ChartJS },
      ) {
        const idx =
          typeof legendItem.index === "number" ? legendItem.index : null;
        if (idx === null) return;

        const ci = legend.chart;

        // Get meta data for the dataset
        const meta = ci.getDatasetMeta(0);

        // Toggle visibility for the clicked segment
        const arc = meta.data[idx] as unknown as
          | { hidden?: boolean }
          | undefined;
        if (!arc) return;
        const alreadyHidden = arc.hidden ?? false;
        arc.hidden = !alreadyHidden;

        // Update the chart
        ci.update();
      },
      labels: {
        generateLabels: function (chart: ChartJS<"doughnut">) {
          const labels = (chart.data.labels ?? []) as string[];
          if (labels.length && chart.data.datasets.length) {
            const ds = chart.data.datasets[0] as unknown as {
              backgroundColor: string | string[];
              borderColor: string | string[];
              borderWidth: number;
            };
            const meta = chart.getDatasetMeta(0);

            return labels.map((label: string, i: number) => {
              const arc = meta.data[i] as unknown as { hidden?: boolean };
              const hidden = arc?.hidden;

              return {
                text: label,
                fillStyle: Array.isArray(ds.backgroundColor)
                  ? ds.backgroundColor[i]
                  : ds.backgroundColor,
                strokeStyle: Array.isArray(ds.borderColor)
                  ? ds.borderColor[i]
                  : ds.borderColor,
                lineWidth: ds.borderWidth,
                hidden: hidden,
                index: i,
                // Add line-through style for hidden items
                fontColor: (
                  chart.options as unknown as {
                    plugins?: { legend?: { labels?: { color?: string } } };
                  }
                )?.plugins?.legend?.labels?.color,
                textDecoration: hidden ? "line-through" : undefined,
              } as import("chart.js").LegendItem;
            });
          }
          return [] as import("chart.js").LegendItem[];
        },
      },
    },
  },
};

export default function DoughnutChart() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();
  const chartRef = useRef<ChartJS<"doughnut">>(null);

  useEffect(() => {
    ChartJS.defaults.color = theme === "dark" ? "#fff" : "#1c1d2b";
  }, [theme]);

  // Create the chart data
  const chartData = {
    labels: booksDataSets.map((yearObj) => Object.keys(yearObj)[0]),
    datasets: [
      {
        label: "Books per year",
        data: booksDataSets.map((yearObj) => {
          const year = Object.keys(yearObj)[0];
          return booksPerYear(year);
        }),
        backgroundColor: booksDataSets.map(
          (yearObj) => Object.values(yearObj)[0],
        ),
        borderColor: booksDataSets.map((yearObj) => Object.values(yearObj)[0]),
        borderWidth: 1,
      },
    ],
  };

  // Set initial hidden state for segments
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const meta = chart.getDatasetMeta(0);

      // Hide data points that are not in the last three years
      booksDataSets.forEach((yearObj, index) => {
        const year = Object.keys(yearObj)[0];
        if (!lastThreeYears.includes(year) && meta.data[index]) {
          (meta.data[index] as unknown as { hidden?: boolean }).hidden = true;
        }
      });

      chart.update();
    }
  }, [chartRef]);

  return (
    <Doughnut
      ref={chartRef}
      data={chartData}
      options={options}
      aria-label={intl.formatMessage({ id: "aria.statistics.books" })}
    />
  );
}
