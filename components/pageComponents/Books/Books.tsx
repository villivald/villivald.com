import { useMemo } from "react";
import Image from "next/image";
import { VirtuosoGrid } from "react-virtuoso";

import { books } from "./Data.json";

import styles from "../../../styles/Books.module.css";

const Books = () => {
  const sortedBooks = useMemo(() => [...books].reverse(), []);

  return (
    <div>
      <VirtuosoGrid
        className={styles.mainContainer}
        data={sortedBooks}
        itemContent={(_index, book) => (
          <Image
            src={`/covers/${book.image}`}
            alt={book.title}
            width={200}
            height={300}
          />
        )}
      />
    </div>
  );
};

export default Books;
