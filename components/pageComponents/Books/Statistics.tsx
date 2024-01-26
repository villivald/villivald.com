import { useContext } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LanguageCharts from "./LanguageCharts";
import CategoryCharts from "./CategoryCharts";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Books.module.css";

export default function Statistics() {
  const router = useRouter();
  const theme = useContext(ThemeContext);

  return (
    <div
      className={styles.mainContainer}
      data-theme={theme}
      data-page="statistics"
    >
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => router.push("/books")}
          data-active={router.pathname === "/books"}
        >
          <FormattedMessage id="gallery" />
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/statistics")}
          data-active={router.pathname === "/statistics"}
        >
          <FormattedMessage id="statistics" />
        </button>
      </div>

      <h2>
        <FormattedMessage id="charts.title.years" />
      </h2>
      <BarChart />
      <DoughnutChart />

      <h2>
        <FormattedMessage id="charts.title.languages" />
      </h2>
      <LanguageCharts />

      <h2>
        <FormattedMessage id="charts.title.category" />
      </h2>
      <CategoryCharts />
    </div>
  );
}
