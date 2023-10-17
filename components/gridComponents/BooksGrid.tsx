import { useIntl } from "react-intl";

import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/BooksGrid.module.css";

export default function BooksGrid() {
  const intl = useIntl();

  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.box}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              {intl.formatMessage({ id: "books" }).toUpperCase()}
            </div>
          ))}
      </div>
      <CardFooter emoji="books" text="books" />
    </div>
  );
}
