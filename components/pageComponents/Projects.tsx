import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Projects.module.css";

export default function Projects() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <div className={styles.mainContainer}>
      <div data-theme={theme}>
        <p>
          <Image
            src="/emojis/github_light.svg"
            width={30}
            height={30}
            alt={intl.formatMessage({ id: "alt.githubLogo" })}
          />
          <Link href="https://github.com/villivald" hrefLang="en">
            villivald
          </Link>
        </p>
        <Image
          src="https://ghchart.rshah.org/30a14e/villivald"
          width={663}
          height={104}
          alt={intl.formatMessage({ id: "alt.githubChart" })}
        />
      </div>
      <div data-theme={theme}></div>
      <div data-theme={theme}></div>
      <div data-theme={theme}>
        <span>
          <h1 data-theme={theme}>
            <FormattedMessage id="petProjects" />
          </h1>
          <span>
            <section>
              <p data-image="koripallo"></p>
              <Image
                src="/preview/preview_koripallopaikat.avif"
                width={400}
                height={330}
                alt={intl.formatMessage({ id: "alt.previewBasketball" })}
                className={styles.hide}
              />
              <a
                data-theme={theme}
                href="https://koripallopaikat.com/"
                hrefLang="en"
              >
                <FormattedMessage id="basketballCourts" />
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt={intl.formatMessage({ id: "alt.externalLink" })}
                />
              </a>
            </section>
            <section>
              <p data-image="cra"></p>
              <Image
                src="/preview/preview_cra.avif"
                width={400}
                height={320}
                alt={intl.formatMessage({ id: "alt.previewCra" })}
                className={styles.hide}
              />
              <a
                data-theme={theme}
                href="https://create-react-app.com/"
                hrefLang="en"
              >
                Crapp <FormattedMessage id="blog" />
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt={intl.formatMessage({ id: "alt.externalLink" })}
                />
              </a>
            </section>
            <section>
              <p data-image="wishlist"></p>
              <Image
                src="/preview/preview_wishlist.avif"
                width={400}
                height={310}
                alt={intl.formatMessage({ id: "alt.previewWishlist" })}
                className={styles.hide}
              />
              <a
                data-theme={theme}
                href="https://wishlist.villivald.com"
                hrefLang="en"
              >
                Wishlist App
                <Image
                  src="/emojis/link.svg"
                  width={24}
                  height={24}
                  alt={intl.formatMessage({ id: "alt.externalLink" })}
                />
              </a>
            </section>
          </span>
        </span>
      </div>
    </div>
  );
}
