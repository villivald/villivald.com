import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useCallback, useRef, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useVirtualizer } from "@tanstack/react-virtual";

import data from "./data.json";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Books.module.css";

type Book = {
  title: string;
  author: string;
  date: string;
  image: string;
  rating: number;
  year?: number;
  language?: string;
  category?: string;
};

export default function Books() {
  const theme = useContext(ThemeContext);
  const parentRef = useRef(null);
  const router = useRouter();
  const intl = useIntl();

  const sortedBooks: Book[] = useMemo(() => [...data.books].reverse(), []);

  const yearBooks = useCallback((year: string) => {
    const books = data.books.filter((book) => book.date.includes(year)).length;
    return books;
  }, []);

  const virtualizer = useVirtualizer({
    count: sortedBooks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  const virtualItems = virtualizer.getVirtualItems();

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

      <p className={styles.time} data-theme={theme}>
        <Image
          src="/emojis/calendar.svg"
          alt={intl.formatMessage({ id: "alt.calendar" })}
          width={32}
          height={32}
        />
        <FormattedMessage id="lastUpdated" />
        <time dateTime="2024-07-03">03.07.2024</time>
      </p>

      <div className={styles.booksContainer} ref={parentRef}>
        {virtualItems.map((virtualItem) => {
          const book: Book = sortedBooks[virtualItem.index];

          // Year cards
          if (book.year) {
            return (
              <div
                key={virtualItem.index}
                className={`${styles.yearCard} ${styles[`year${book.year}`]}`}
              >
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
            );
          }

          // Book cards
          return (
            <figure key={virtualItem.index}>
              <Image
                src={`/covers/${book.image}`}
                alt=""
                width={200}
                height={300}
                tabIndex={0}
                aria-describedby={`book-cover-${virtualItem.index}`}
              />
              <p id={`book-cover-${virtualItem.index}`} lang={book.language}>
                <span>
                  {book.title} - {book.author}
                </span>
                <span>
                  {book.date} <span aria-hidden="true">📅</span>
                </span>
                <span>{"⭐️".repeat(book.rating)}</span>
              </p>
            </figure>
          );
        })}
      </div>
    </>
  );
}
