import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "../context";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const theme = useContext(ThemeContext);

  const socialIcons = [
    { name: "gitlab", link: "https://version.helsinki.fi/villival" },
    { name: "github", link: "https://github.com/villivald" },
    { name: "linkedin", link: "https://www.linkedin.com/in/villivald/" },
    { name: "mastodon", link: "https://mastodon.world/@villivald" },
  ];

  const otherIcons = [
    { name: "koripallopaikat", link: "https://www.koripallopaikat.com" },
    { name: "email", link: "mailto:maxim@villivald.com" },
    { name: "blog", link: "https://www.create-react-app.com/" },
    { name: "hackernoon", link: "https://hackernoon.com/u/villivald" },
  ];

  const Divider = () => (
    <div>
      <div data-theme={theme}></div>
    </div>
  );

  return (
    <footer className={styles.footer} data-theme={theme}>
      <Divider />
      <div>
        {socialIcons.map((icon) => (
          <Link href={icon.link} key={icon.name}>
            <Image
              src={`/emojis/${icon.name}.svg`}
              alt="logo"
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
              alt="logo"
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
};

export default Footer;
