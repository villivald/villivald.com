import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

import styles from "../../../styles/Books.module.css";

export default function Statistics() {
  const router = useRouter();

  return (
    <div className={styles.mainContainer} data-page="statistics">
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
      <BarChart />
      <DoughnutChart />
    </div>
  );
}
