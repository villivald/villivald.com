import Link from "next/link";

import styles from "../styles/Grid.module.css";

const Grid = () => {
  return (
    <main className={styles.main}>
      <Link href="/study">
        <div></div>
      </Link>
      <Link href="/books">
        <div></div>
      </Link>
      <Link href="/koripallopaikat">
        <div></div>
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
      <Link href="/">
        <div></div>
      </Link>
      <Link href="/">
        <div></div>
      </Link>
      <Link href="/">
        <div></div>
      </Link>
    </main>
  );
};

export default Grid;
