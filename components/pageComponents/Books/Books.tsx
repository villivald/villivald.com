import { useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { VirtuosoGrid } from "react-virtuoso";
import { FormattedMessage } from "react-intl";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";

type Book = {
  title: string;
  author: string;
  date: string;
  rating: number;
  image: string;
  year?: number;
};

const Books = () => {
  const router = useRouter();

  const sortedBooks = useMemo(() => [...data.books].reverse(), []);

  const yearBooks = useCallback((year: string) => {
    const books = data.books.filter((book) => book.date.includes(year)).length;
    return books;
  }, []);

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => router.push("/books")}
          data-active={router.pathname === "/books"}
        >
          <FormattedMessage id="gallery" />
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/statistics")}
          data-active={router.pathname === "/statistics"}
        >
          <FormattedMessage id="statistics" />
        </button>
      </div>
      <VirtuosoGrid
        className={styles.mainContainer}
        data={sortedBooks}
        itemContent={(_index, book: Book) =>
          book.year ? (
            <div className={`${styles.yearCard} ${styles[`year${book.year}`]}`}>
              <p>
                <span>
                  <span>{book.year}</span>
                  <span>→</span>
                </span>
                <span>
                  <FormattedMessage id="total" />
                  {yearBooks(book.year.toString())}
                </span>
              </p>
            </div>
          ) : (
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
          )
        }
      />
    </>
  );
};

export default Books;
