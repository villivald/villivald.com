import { useState } from "react";

import styles from "../../styles/grid/NowGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function NowGrid() {
  const [eye, setEye] = useState<string>("open");

  return (
    <div
      className={styles.container}
      aria-hidden="true"
      onMouseEnter={() => setEye("closed")}
      onMouseLeave={() => setEye("open")}
    >
      <div className={styles.now} data-eye={eye} />
      <CardFooter emoji="now" text="now" />
    </div>
  );
}
