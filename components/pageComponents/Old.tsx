import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Old.module.css";

const sites = [
  {
    id: "3",
    description: ["javascript", "css", "html", "react"],
    link: "https://villivald.vercel.app/",
  },
  {
    id: "2",
    description: ["css", "javascript", "bootstrap", "html"],
    link: "https://villivald.github.io/proj/",
  },
  {
    id: "1",
    description: ["html", "skeleton css"],
    link: "https://villivald.github.io/proj/Projects/Skeleton/index.html",
  },
];

export default function Old() {
  const intl = useIntl();
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardWrapper} data-theme={theme}>
        {sites.map((site) => (
          <div className={styles.card} key={site.id}>
            <div>
              <p>
                <Link href={`${site.link}`}>
                  <FormattedMessage id={`old.title.${site.id}`} />
                  <Image
                    src="/emojis/link.svg"
                    width={24}
                    height={24}
                    alt={intl.formatMessage({ id: "alt.externalLink" })}
                  />
                </Link>
              </p>
              <Image
                src={`/images/website${site.id}.avif`}
                width={300}
                height={300}
                alt={intl.formatMessage({ id: `alt.old.${site.id}` })}
              />
              <p>
                {site.description.map((desc) => (
                  <span key={desc}>{desc}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
