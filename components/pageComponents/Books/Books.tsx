import { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { VirtuosoGrid } from "react-virtuoso";

import data from "./data.json";

import styles from "../../../styles/Books.module.css";
import { FormattedMessage } from "react-intl";

type Book = {
  title: string;
  author: string;
  date: string;
  rating: number;
  image: string;
  year?: number;
  total?: number;
};

const Books = () => {
  const sortedBooks = useMemo(() => [...data.books].reverse(), []);

  const router = useRouter();

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => router.push("/books")}
          data-active={router.pathname === "/books"}
        >
          Gallery
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/books/statistics")}
          data-active={router.pathname === "/books/statistics"}
        >
          Statistics
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
                  {book.total}
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
