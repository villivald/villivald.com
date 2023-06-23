import Link from "next/link";

import BooksGrid from "./gridComponents/BooksGrid";
import KoripallopaikatGrid from "./gridComponents/KoripallopaikatGrid";
import BlogGrid from "./gridComponents/BlogGrid";
import OldGrid from "./gridComponents/OldGrid";
import ContactGrid from "./gridComponents/ContactGrid";
import AboutGrid from "./gridComponents/AboutGrid";
import StudyGrid from "./gridComponents/StudyGrid";
import UsesGrid from "./gridComponents/UsesGrid";
import ProjectsGrid from "./gridComponents/ProjectsGrid";

import styles from "../styles/Grid.module.css";

export default function Grid() {
  return (
    <main className={styles.main}>
      <Link href="/study">
        <StudyGrid />
      </Link>
      <Link href="/koripallopaikat">
        <KoripallopaikatGrid />
      </Link>
      <Link href="/blog">
        <BlogGrid />
      </Link>
      <Link href="/uses">
        <UsesGrid />
      </Link>
      <Link href="/books">
        <BooksGrid />
      </Link>
      <Link href="/projects">
        <ProjectsGrid />
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
}
