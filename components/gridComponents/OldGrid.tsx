import styles from "../../styles/grid/OldGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function OldGrid() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div>
        <div className={styles.proto} />
        <div className={styles.done} />
      </div>
      <CardFooter emoji="old" text="old" />
      <CardFooter emoji="old" text="oldMobile" />
    </div>
  );
}
