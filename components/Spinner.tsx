import styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.balls}>
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          {[...Array(5)].map((_, i) => (
            <div className={styles.ball} key={i} data-delay={i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Spinner;
