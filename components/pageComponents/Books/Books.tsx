import { useMemo } from "react";
import Image from "next/image";
import { VirtuosoGrid } from "react-virtuoso";

import data_2019 from "./data/data_2019.json";
import data_2020 from "./data/data_2020.json";
import data_2021 from "./data/data_2021.json";

import styles from "../../../styles/Books.module.css";

const Books = () => {
  const sortedBooks_2019 = useMemo(() => [...data_2019.books].reverse(), []);
  const sortedBooks_2020 = useMemo(() => [...data_2020.books].reverse(), []);
  const sortedBooks_2021 = useMemo(() => [...data_2021.books].reverse(), []);

  const books = [
    { year: 2021, books: sortedBooks_2021 },
    { year: 2020, books: sortedBooks_2020 },
    { year: 2019, books: sortedBooks_2019 },
  ];

  return (
    <div>
      {books.map((item) => (
        <div key={item.year}>
          <h1 className={styles.yearHeader}>{item.year}</h1>
          <VirtuosoGrid
            className={styles.mainContainer}
            data={item.books}
            itemContent={(_index, book) => (
              <>
                <Image
                  src={`/covers/${book.image}`}
                  alt={book.title}
                  width={200}
                  height={300}
                />
                <p>
                  <span>
                    {book.title} - {book.author}
                  </span>
                  <span>
                    {book.date} <span>📅</span>
                  </span>
                  <span>{"⭐️".repeat(book.rating)}</span>
                </p>
              </>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Books;
