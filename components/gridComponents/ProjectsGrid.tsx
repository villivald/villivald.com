import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/ProjectsGrid.module.css";

export default function ProjectsGrid() {
  const projects = "projects";

  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.letters}>
        {projects.split("").map((letter, index) => {
          return (
            <p key={index} className={styles[letter]}>
              {letter.toUpperCase()}
            </p>
          );
        })}
      </div>
      <CardFooter emoji={projects} text={projects} />
    </div>
  );
}
