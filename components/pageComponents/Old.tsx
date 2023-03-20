import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";

import styles from "../../styles/Old.module.css";

const sites = [
  {
    id: "1",
    description: ["html", "skeleton css"],
  },
  {
    id: "2",
    description: ["css", "javascript", "bootstrap", "html"],
  },
  {
    id: "3",
    description: ["javascript", "css", "html", "react"],
  },
];

const Old = () => {
  const intl = useIntl();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {sites.map((site) => (
          <div className={styles.card} key={site.id}>
            <div>
              <p>
                <FormattedMessage id={`old.title.${site.id}`} />
              </p>
              <Image
                src={`/images/website${site.id}.webp`}
                width={300}
                height={300}
                alt={intl.formatMessage({ id: `old.alt.${site.id}` })}
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
};

export default Old;
