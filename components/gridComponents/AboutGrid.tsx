import styles from "../../styles/grid/AboutGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

const AboutGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about} />
      <div className={styles.cat} />
      <CardFooter emoji="about" text="about" />
    </div>
  );
};

export default AboutGrid;
