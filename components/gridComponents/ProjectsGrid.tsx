import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/ProjectsGrid.module.css";

export default function ProjectsGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.letters}>
        <p className={styles.p}>P</p>
        <p className={styles.r}>R</p>
        <p className={styles.o}>O</p>
        <p className={styles.j}>J</p>
        <p className={styles.e}>E</p>
        <p className={styles.c}>C</p>
        <p className={styles.t}>T</p>
        <p className={styles.s}>S</p>
      </div>
      <CardFooter emoji="projects" text="projects" />
    </div>
  );
}
