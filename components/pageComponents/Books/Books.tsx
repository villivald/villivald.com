import { useVirtualizer } from "@tanstack/react-virtual";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Books.module.css";
import data from "./data.json";

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

const sortedBooks: Book[] = [...data.books].reverse();
const availableLanguages = ["en", "fi", "ru"];

export default function Books() {
  const theme = useContext(ThemeContext);
  const parentRef = useRef(null);
  const router = useRouter();
  const intl = useIntl();

  // Filters (checkbox chips)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const getYearFromDate = (date: string) => date.slice(-4);

  const isAnyFilterActive =
    selectedLanguages.length > 0 || selectedRatings.length > 0;

  // Determine which years have results under current filters (considering only real book items)
  const yearsWithResultsSet = (() => {
    const years = new Set<string>();

    for (const book of sortedBooks) {
      if (book.year) continue;

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        (book.language ? selectedLanguages.includes(book.language) : false);

      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(book.rating);

      if (matchesLanguage && matchesRating) {
        years.add(getYearFromDate(book.date));
      }
    }

    return years;
  })();

  const yearBooksFiltered = (year: string) => {
    let count = 0;

    for (const book of sortedBooks) {
      if (book.year) continue;

      if (getYearFromDate(book.date) !== year) continue;

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        (book.language ? selectedLanguages.includes(book.language) : false);

      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(book.rating);

      if (matchesLanguage && matchesRating) count += 1;
    }
    return count;
  };

  const filteredBooks: Book[] = sortedBooks.filter((book) => {
    if (book.year) {
      // Show year cards only when no filters active or when there are books for that year under filters
      if (!isAnyFilterActive) return true;
      return yearsWithResultsSet.has(String(book.year));
    }

    const matchesLanguage =
      selectedLanguages.length === 0 ||
      (book.language ? selectedLanguages.includes(book.language) : false);

    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(book.rating);
    return matchesLanguage && matchesRating;
  });

  const filteredActualCount = filteredBooks.filter((b) => !b.year).length;

  const virtualizer = useVirtualizer({
    count: filteredBooks.length,
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
        <time dateTime="2025-10-14">14.10.2025</time>
      </p>

      {/* Filters */}
      <div
        className={styles.filters}
        data-theme={theme}
        aria-label={intl.formatMessage({ id: "filters" })}
      >
        <div
          className={styles.filterGroup}
          role="group"
          aria-label={intl.formatMessage({ id: "filter.language" })}
        >
          <FormattedMessage id="filter.language" />
          <div className={styles.chipGroup}>
            {availableLanguages.map((lang) => {
              const selected = selectedLanguages.includes(lang);

              return (
                <label
                  key={lang}
                  className={`${styles.chip} ${styles.chipLang}`}
                  data-selected={selected}
                >
                  <input
                    type="checkbox"
                    aria-label={lang}
                    checked={selected}
                    onChange={(e) => {
                      setSelectedLanguages((prev) =>
                        e.target.checked
                          ? [...prev, lang]
                          : prev.filter((l) => l !== lang),
                      );
                    }}
                  />
                  <span>{lang.toUpperCase()}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div
          className={styles.filterGroup}
          role="group"
          aria-label={intl.formatMessage({ id: "filter.rating" })}
        >
          <FormattedMessage id="filter.rating" />
          <div className={styles.chipGroup}>
            {[5, 4, 3, 2, 1].map((r) => {
              const selected = selectedRatings.includes(r);

              return (
                <label key={r} className={styles.chip} data-selected={selected}>
                  <input
                    type="checkbox"
                    aria-label={`${r} stars`}
                    checked={selected}
                    onChange={(e) => {
                      setSelectedRatings((prev) =>
                        e.target.checked
                          ? [...prev, r]
                          : prev.filter((v) => v !== r),
                      );
                    }}
                  />
                  <span>{"⭐️".repeat(r)}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.filtersMeta}>
          <span className={styles.totalPill} aria-live="polite">
            <FormattedMessage id="total" />
            <span>{filteredActualCount}</span>
          </span>
          <button
            type="button"
            className={styles.clearFilters}
            onClick={() => {
              setSelectedLanguages([]);
              setSelectedRatings([]);
            }}
            aria-disabled={!isAnyFilterActive}
            disabled={!isAnyFilterActive}
          >
            <FormattedMessage id="filter.all" />
          </button>
        </div>
      </div>

      <div className={styles.booksContainer} ref={parentRef}>
        {virtualItems.map((virtualItem) => {
          const book: Book = filteredBooks[virtualItem.index];

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
                    {yearBooksFiltered(book.year.toString())}
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
