import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/WorkAndStudyGrid.module.css";

export default function WorkAndStudyGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.image}></div>
      <div className={styles.image_alt}></div>
      <CardFooter emoji="workandstudy" text="workandstudy" />
    </div>
  );
}
