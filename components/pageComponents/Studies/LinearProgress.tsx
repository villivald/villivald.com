import styles from "../../../styles/LinearProgress.module.css";

export const LabProgress = () => {
  return (
    <div className={styles.progressContainer}>
      <progress id="file" value="79" max="100">
        79%
      </progress>
    </div>
  );
};

export const HelsinkiProgress = () => {
  return (
    <div className={styles.progressContainer}>
      <progress id="file" value="100" max="100">
        100%
      </progress>
    </div>
  );
};
