import styles from "../../styles/grid/PhotoBoothGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function PhotoBoothGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.about} />
      <div className={styles.cat} />
      <CardFooter emoji="photobooth" text="photobooth" />
    </div>
  );
}
