import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/OldGrid.module.css";

const OldGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.proto} />
        <div className={styles.done} />
      </div>
      <CardFooter emoji="old" text="old" />
    </div>
  );
};

export default OldGrid;
