import Link from "next/link";

import styles from "../styles/Grid.module.css";
import BooksGrid from "./gridComponents/BooksGrid";
import KoripallopaikatGrid from "./gridComponents/KoripallopaikatGrid";
import BlogGrid from "./gridComponents/BlogGrid";

const Grid = () => {
  return (
    <main className={styles.main}>
      <Link href="/study">
        <div></div>
      </Link>
      <Link href="/books">
        <BooksGrid />
      </Link>
      <Link href="/koripallopaikat">
        <KoripallopaikatGrid />
      </Link>
      <Link href="/blog">
        <BlogGrid />
      </Link>
      <Link href="/uses">
        <div></div>
      </Link>
      <Link href="/projects">
        <div></div>
      </Link>
      <Link href="/about">
        <div></div>
      </Link>
      <Link href="/contact">
        <div></div>
      </Link>
      <Link href="/">
        <div></div>
      </Link>
    </main>
  );
};

export default Grid;
