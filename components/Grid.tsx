import Link from "next/link";

import BooksGrid from "./gridComponents/BooksGrid";
import BlogGrid from "./gridComponents/BlogGrid";
import OldGrid from "./gridComponents/OldGrid";
import ContactGrid from "./gridComponents/ContactGrid";
import AboutGrid from "./gridComponents/AboutGrid";
import StudyGrid from "./gridComponents/StudyGrid";
import UsesGrid from "./gridComponents/UsesGrid";
import ProjectsGrid from "./gridComponents/ProjectsGrid";
import RandomGrid from "./gridComponents/RandomGrid";

import styles from "../styles/Grid.module.css";

export default function Grid() {
  const getRandomLink = () => {
    const links = [
      "/study",
      "/blog",
      "/uses",
      "/books",
      "/projects",
      "/about",
      "/contact",
      "/old",
    ];
    const randomLink = links[Math.floor(Math.random() * links.length)];

    return randomLink;
  };

  return (
    <main className={styles.main}>
      <Link href="/study">
        <StudyGrid />
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
      <Link href={getRandomLink()}>
        <RandomGrid />
      </Link>
    </main>
  );
}
