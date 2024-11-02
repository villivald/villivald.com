import { useState } from "react";
import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/NowGrid.module.css";

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
