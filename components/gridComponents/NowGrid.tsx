import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/NowGrid.module.css";

export default function NowGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.now} />
      <CardFooter emoji="now" text="now" />
    </div>
  );
}
