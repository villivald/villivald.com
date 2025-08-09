import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Books.module.css";

const BarChart = dynamic(() => import("./BarChart"), { ssr: false });
const DoughnutChart = dynamic(() => import("./DoughnutChart"), { ssr: false });
const SecondaryCharts = dynamic(() => import("./SecondaryCharts"), {
  ssr: false,
});

export default function Statistics() {
  const router = useRouter();
  const theme = useContext(ThemeContext);

  const secondaryCharts = ["language", "category"];

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

      {secondaryCharts.map((chart) => {
        return (
          <Fragment key={chart}>
            <h2>
              <FormattedMessage id={`charts.title.${chart}`} />
            </h2>
            <SecondaryCharts type={chart} />
          </Fragment>
        );
      })}
    </div>
  );
}
