import styles from "../../styles/grid/AboutGrid.module.css";

const AboutGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about} />
      <div className={styles.cat} />
      <div className={styles.gridFooter}>
        <p>🚴‍♂️About</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default AboutGrid;
