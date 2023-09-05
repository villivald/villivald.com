import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/OldGrid.module.css";

export default function OldGrid() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.proto} />
        <div className={styles.done} />
      </div>
      <CardFooter emoji="old" text="old" />
      <CardFooter emoji="old" text="oldMobile" />
    </div>
  );
}
