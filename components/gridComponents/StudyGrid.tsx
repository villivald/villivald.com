import { useState } from "react";

import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/StudyGrid.module.css";

const StudyGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.image_alt}></div>
      <CardFooter emoji="student" text="study" />
    </div>
  );
};

export default StudyGrid;
