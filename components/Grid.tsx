import Link from "next/link";
import { useState, useContext } from "react";
import { useIntl } from "react-intl";

import BooksGrid from "./gridComponents/BooksGrid";
import BlogGrid from "./gridComponents/BlogGrid";
import OldGrid from "./gridComponents/OldGrid";
import ContactGrid from "./gridComponents/ContactGrid";
import AboutGrid from "./gridComponents/AboutGrid";
import WorkAndStudyGrid from "./gridComponents/WorkAndStudyGrid";
import UsesGrid from "./gridComponents/UsesGrid";
import ProjectsGrid from "./gridComponents/ProjectsGrid";
import RandomGrid from "./gridComponents/RandomGrid";
import NowGrid from "./gridComponents/NowGrid";

import { ThemeContext } from "../context";
import styles from "../styles/Grid.module.css";

export default function Grid() {
  const [randomLink, setRandomLink] = useState("");
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const links = [
    { href: "/now", component: <NowGrid /> },
    { href: "/workandstudy", component: <WorkAndStudyGrid /> },
    { href: "/blog", component: <BlogGrid /> },
    { href: "/uses", component: <UsesGrid /> },
    { href: "/books", component: <BooksGrid /> },
    { href: "/projects", component: <ProjectsGrid /> },
    { href: "/about", component: <AboutGrid /> },
    { href: "/contact", component: <ContactGrid /> },
    { href: "/old", component: <OldGrid /> },
  ];

  const getRandomLink = () => {
    const randomLink = links[Math.floor(Math.random() * links.length)];

    setRandomLink(randomLink.href);
  };

  return (
    <section className={styles.main} data-theme={theme}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={intl.formatMessage({ id: `aria.${link.href.slice(1)}` })}
        >
          {link.component}
        </Link>
      ))}
      <Link
        href={randomLink}
        onMouseOver={() => getRandomLink()}
        aria-label={intl.formatMessage({ id: "aria.randomLink" })}
      >
        <RandomGrid />
      </Link>
    </section>
  );
}
