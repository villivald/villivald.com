import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import YearsChart from "./YearsChart";

import styles from "../../../styles/Books.module.css";

const Statistics = () => {
  const router = useRouter();

  return (
    <div className={styles.mainContainer}>
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
      <YearsChart />
    </div>
  );
};

export default Statistics;
