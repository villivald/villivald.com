import styles from "../../styles/grid/StudyGrid.module.css";

const StudyGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Study</h1>
      </div>
      <div className={styles.gridFooter}>
        <p>✏️Study</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default StudyGrid;
