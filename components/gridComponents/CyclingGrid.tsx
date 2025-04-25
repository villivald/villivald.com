import styles from "../../styles/grid/CyclingGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function CyclingGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <p className={styles.figure}></p>
      <p className={styles.title}>C</p>
      <CardFooter emoji="cycling" text="cycling" />
    </div>
  );
}
