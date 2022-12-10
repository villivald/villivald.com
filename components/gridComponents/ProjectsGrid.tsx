import styles from "../../styles/grid/ProjectsGrid.module.css";

const ProjectsGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Projects</h1>
      </div>
      <div className={styles.gridFooter}>
        <p>✏️Projects</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default ProjectsGrid;
