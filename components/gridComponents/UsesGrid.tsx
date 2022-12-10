import styles from "../../styles/grid/UsesGrid.module.css";

const UsesGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Uses</h1>
      </div>
      <div className={styles.gridFooter}>
        <p>✏️Uses</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default UsesGrid;
