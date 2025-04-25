import Link from "next/link";
import { useContext, useState } from "react";
import { useIntl } from "react-intl";

import { ThemeContext } from "../context";
import styles from "../styles/Grid.module.css";
import AboutGrid from "./gridComponents/AboutGrid";
import BlogGrid from "./gridComponents/BlogGrid";
import BooksGrid from "./gridComponents/BooksGrid";
import ContactGrid from "./gridComponents/ContactGrid";
import CyclingGrid from "./gridComponents/CyclingGrid";
import NowGrid from "./gridComponents/NowGrid";
import OldGrid from "./gridComponents/OldGrid";
import ProjectsGrid from "./gridComponents/ProjectsGrid";
import RandomGrid from "./gridComponents/RandomGrid";
import UsesGrid from "./gridComponents/UsesGrid";
import WorkAndStudyGrid from "./gridComponents/WorkAndStudyGrid";

export default function Grid() {
  const [randomLink, setRandomLink] = useState("");
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const links = [
    { href: "/now", component: <NowGrid /> },
    { href: "/cycling", component: <CyclingGrid /> },
    { href: "/workandstudy", component: <WorkAndStudyGrid /> },
    { href: "/uses", component: <UsesGrid /> },
    { href: "/books", component: <BooksGrid /> },
    { href: "/projects", component: <ProjectsGrid /> },
    { href: "/blog", component: <BlogGrid /> },
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
