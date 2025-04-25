import styles from "../../styles/grid/AboutGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function AboutGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.about} />
      <div className={styles.cat} />
      <CardFooter emoji="about" text="about" />
    </div>
  );
}
