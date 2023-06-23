import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Projects.module.css";

export default function Projects() {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.mainContainer}>
      <div data-theme={theme}>
        <p>
          <Image
            src="/emojis/github_light.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Link href="https://github.com/villivald">villivald</Link>
        </p>
        <Image
          src="http://ghchart.rshah.org/30a14e/villivald"
          alt="villivald's Github chart"
          width={663}
          height={104}
        />
      </div>
      <div data-theme={theme}></div>
      <div data-theme={theme}></div>
      <div>
        <span>
          <h1 data-theme={theme}>
            <FormattedMessage id="work" />
          </h1>
          <p>Some projects</p>
        </span>
        <span>
          <h1 data-theme={theme}>
            <FormattedMessage id="petProjects" />
          </h1>
          <span>
            <p>Projects 1</p>
            <p>Projects 2</p>
            <p>Project 3</p>
          </span>
        </span>
      </div>
    </div>
  );
}
