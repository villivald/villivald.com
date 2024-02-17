import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useIntl } from "react-intl";

import { ThemeContext } from "../context";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const intl = useIntl();

  const socialIcons = [
    {
      name: "gitlab",
      link: "https://version.helsinki.fi/villival",
      altText: "gitlabLogo",
    },
    {
      name: "github",
      link: "https://github.com/villivald",
      altText: "githubLogo",
    },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/villivald/",
      altText: "linkedinLogo",
    },
    {
      name: "mastodon",
      link: "https://notacult.social/@villivald",
      altText: "mastodonLogo",
    },
  ];

  const otherIcons = [
    {
      name: "koripallopaikat",
      link: "https://koripallopaikat.com",
      altText: "koripallopaikat",
    },
    {
      name: "email",
      link: "mailto:maxim@villivald.com",
      altText: "email",
    },
    {
      name: "blog",
      link: "https://create-react-app.com/",
      altText: "blogPen",
    },
    {
      name: "hackernoon",
      link: "https://hackernoon.com/u/villivald",
      altText: "hackernoonLogo",
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
          <Link rel="me" href={icon.link} key={icon.name} hrefLang="en">
            <Image
              src={`/emojis/${icon.name}.svg`}
              alt={intl.formatMessage({ id: `alt.${icon.altText}` })}
              width={64}
              height={64}
            />
          </Link>
        ))}
      </div>
      <Divider />
      <div>
        {otherIcons.map((icon) => (
          <Link href={icon.link} key={icon.name} hrefLang="en">
            <Image
              src={`/emojis/${icon.name}.svg`}
              alt={intl.formatMessage({ id: `alt.${icon.altText}` })}
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
