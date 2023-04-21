import { useRouter } from "next/router";

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
          Gallery
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/statistics")}
          data-active={router.pathname === "/statistics"}
        >
          Statistics
        </button>
      </div>
    </div>
  );
};

export default Statistics;
