import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/StudyGrid.module.css";

export default function StudyGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.image}></div>
      <div className={styles.image_alt}></div>
      <CardFooter emoji="study" text="study" />
    </div>
  );
}
