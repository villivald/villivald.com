import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/ProjectsGrid.module.css";

const ProjectsGrid = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.gridFooter}>
        <p>
          💻 <FormattedMessage id="projects" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default ProjectsGrid;
