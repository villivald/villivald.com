import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { VirtuosoGrid } from "react-virtuoso";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";

type Book = {
  title: string;
  author: string;
  date: string;
  rating: number;
  image: string;
  year?: number;
  language?: string;
};

export default function Books() {
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
        itemContent={(index: number, book: Book) =>
          book.year ? (
            <div className={`${styles.yearCard} ${styles[`year${book.year}`]}`}>
              <h2>
                <span>
                  <span>{book.year}</span>
                  <span>→</span>
                </span>
                <span>
                  <FormattedMessage id="total" />
                  {yearBooks(book.year.toString())}
                </span>
              </h2>
            </div>
          ) : (
            <figure>
              <Image
                src={`/covers/${book.image}`}
                alt=""
                width={200}
                height={300}
                tabIndex={0}
                aria-describedby={`book-cover-${index}`}
              />
              <p id={`book-cover-${index}`} lang={book.language}>
                <span>
                  {book.title} - {book.author}
                </span>
                <span>
                  {book.date} <span aria-hidden="true">📅</span>
                </span>
                <span>{"⭐️".repeat(book.rating)}</span>
              </p>
            </figure>
          )
        }
      />
    </>
  );
}
