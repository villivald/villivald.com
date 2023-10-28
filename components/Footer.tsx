import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { ThemeContext } from "../context";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const theme = useContext(ThemeContext);
  const router = useRouter();

  const socialIcons = [
    {
      name: "gitlab",
      link: "https://version.helsinki.fi/villival",
      altText: "GitLab - logo",
    },
    {
      name: "github",
      link: "https://github.com/villivald",
      altText: "GitHub - logo",
    },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/villivald/",
      altText: "LinkedIn - logo",
    },
    {
      name: "mastodon",
      link: "https://notacult.social/@villivald",
      altText: "Mastodon - logo",
    },
  ];

  const otherIcons = [
    {
      name: "koripallopaikat",
      link: "https://koripallopaikat.com",
      altText: "Basketball courts project",
    },
    {
      name: "email",
      link: "mailto:maxim@villivald.com",
      altText: "Send email",
    },
    {
      name: "blog",
      link: "https://create-react-app.com/",
      altText: "My personal blog",
    },
    {
      name: "hackernoon",
      link: "https://hackernoon.com/u/villivald",
      altText: "HackerNoon - logo",
    },
  ];

  const Divider = () => (
    <div>
      <div data-theme={theme}></div>
    </div>
  );

  return (
    <footer
      id="contactsLinks"
      className={styles.footer}
      data-theme={theme}
      data-hide={router.pathname === "/books"}
    >
      <Divider />
      <div>
        {socialIcons.map((icon) => (
          <Link href={icon.link} key={icon.name}>
            <Image
              src={`/emojis/${icon.name}.svg`}
              alt={icon.altText}
              width={64}
              height={64}
            />
          </Link>
        ))}
      </div>
      <Divider />
      <div>
        {otherIcons.map((icon) => (
          <Link href={icon.link} key={icon.name}>
            <Image
              src={`/emojis/${icon.name}.svg`}
              alt={icon.altText}
              width={64}
              height={icon.name === "hackernoon" ? 48 : 64}
              data-theme={icon.name === "hackernoon" && theme === "dark"}
            />
          </Link>
        ))}
      </div>
      <Divider />
    </footer>
  );
}
