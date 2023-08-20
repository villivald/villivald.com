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
          <span>
            <p>
              <p data-image="public"></p>
              <a href="https://tunnisteportaali.kansalliskirjasto.fi/">
                <FormattedMessage id="identifierServices.public" />
              </a>
            </p>
            <p>
              <p data-image="admin"></p>
              <span>
                <FormattedMessage id="identifierServices.admin" />
              </span>
            </p>
            <p>
              <p data-image="publisher"></p>
              <span>
                <FormattedMessage id="publisherPortal" />
              </span>
            </p>
          </span>
        </span>
        <span>
          <h1 data-theme={theme}>
            <FormattedMessage id="petProjects" />
          </h1>
          <span>
            <p>
              <p data-image="koripallo"></p>
              <a href="https://koripallopaikat.com/">
                <FormattedMessage id="basketballCourts" />
              </a>
            </p>
            <p>
              <p data-image="cra"></p>
              <a href="https://create-react-app.com/">
                Create-React-App <FormattedMessage id="blog" />
              </a>
            </p>
            <p>
              <p data-image="wishlist"></p>
              <a href="https://wishlist.villivald.com">Wishlist App</a>
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
