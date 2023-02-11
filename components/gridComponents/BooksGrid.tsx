import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/BooksGrid.module.css";

const BooksGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i}>BOOKS</div>
          ))}
      </div>
      <CardFooter emoji="books" text="books" />
    </div>
  );
};

export default BooksGrid;
