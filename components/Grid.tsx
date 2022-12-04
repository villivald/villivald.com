import Link from "next/link";

import styles from "../styles/Grid.module.css";
import BooksGrid from "./gridComponents/BooksGrid";
import KoripallopaikatGrid from "./gridComponents/KoripallopaikatGrid";
import BlogGrid from "./gridComponents/BlogGrid";
import OldGrid from "./gridComponents/OldGrid";
import ContactGrid from "./gridComponents/ContactGrid";
import AboutGrid from "./gridComponents/AboutGrid";

const Grid = () => {
  return (
    <main className={styles.main}>
      <Link href="/study">
        <div></div>
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
      <Link href="/books">
        <BooksGrid />
      </Link>
      <Link href="/projects">
        <div></div>
      </Link>
      <Link href="/about">
        <AboutGrid />
      </Link>
      <Link href="/contact">
        <ContactGrid />
      </Link>
      <Link href="/old">
        <OldGrid />
      </Link>
    </main>
  );
};

export default Grid;
