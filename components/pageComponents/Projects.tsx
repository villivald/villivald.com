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
            <section>
              <p data-image="public"></p>
              <a
                data-theme={theme}
                href="https://tunnisteportaali.kansalliskirjasto.fi/"
              >
                <FormattedMessage id="identifierServices.public" />
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt="external link"
                />
              </a>
            </section>
            <section>
              <p data-image="admin"></p>
              <span data-theme={theme}>
                <FormattedMessage id="identifierServices.admin" />
              </span>
            </section>
            <section>
              <p data-image="publisher"></p>
              <span data-theme={theme}>
                <FormattedMessage id="publisherPortal" />
              </span>
            </section>
          </span>
        </span>
        <span>
          <h1 data-theme={theme}>
            <FormattedMessage id="petProjects" />
          </h1>
          <span>
            <section>
              <p data-image="koripallo"></p>
              <a data-theme={theme} href="https://koripallopaikat.com/">
                <FormattedMessage id="basketballCourts" />
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt="external link"
                />
              </a>
            </section>
            <section>
              <p data-image="cra"></p>
              <a data-theme={theme} href="https://create-react-app.com/">
                Create-React-App <FormattedMessage id="blog" />
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt="external link"
                />
              </a>
            </section>
            <section>
              <p data-image="wishlist"></p>
              <a data-theme={theme} href="https://wishlist.villivald.com">
                Wishlist App
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt="external link"
                />
              </a>
            </section>
          </span>
        </span>
      </div>
    </div>
  );
}
