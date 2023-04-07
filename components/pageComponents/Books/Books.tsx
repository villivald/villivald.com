import { useMemo } from "react";
import Image from "next/image";
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
};

const Books = () => {
  const sortedBooks = useMemo(() => [...data.books].reverse(), []);

  return (
    <VirtuosoGrid
      className={styles.mainContainer}
      data={sortedBooks}
      itemContent={(_index, book: Book) =>
        book.year ? (
          <div>
            <p>
              <span>{book.year}</span>
              <span>→</span>
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
  );
};

export default Books;
