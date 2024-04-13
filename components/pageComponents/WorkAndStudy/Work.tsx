import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

type Props = {
  theme: string;
  styles: { [key: string]: string };
  intl: { formatMessage: (id: { id: string }) => string };
};

export default function Work({ styles, theme, intl }: Props) {
  return (
    <div className={styles.workContainer}>
      <div className={styles.emojiContainer}>
        <h1>
          <FormattedMessage id="work" />
        </h1>
        <Image
          src="/emojis/work.svg"
          alt={intl.formatMessage({ id: "alt.briefcase" })}
          width={36}
          height={36}
        />
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <Image
            src="/images/qualitydesk.png"
            alt={intl.formatMessage({ id: "alt.qualitydesk" })}
            width={24}
            height={24}
          />
          <h2>QualityDesk</h2>
        </div>

        <ul>
          <li>2024 →</li>
          <li>
            <FormattedMessage id="softwareDeveloper" />
          </li>
          <li>React, Meteor, Javascript, MongoDB, HTML, CSS</li>
        </ul>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <Image
            data-theme={theme}
            src="/images/kk.webp"
            alt={intl.formatMessage({ id: "alt.library" })}
            width={24}
            height={24}
          />
          <h2>
            <FormattedMessage id="nationalLibrary" />
          </h2>
        </div>

        <ul>
          <li>2022 - 2024</li>
          <li>
            <FormattedMessage id="frontendDeveloper" />
          </li>
          <li>React, Javascript, HTML, CSS, Redux, Cypress, Figma & A11y</li>
        </ul>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <section>
            <Image
              src="/images/construction.svg"
              width={200}
              height={155}
              alt={intl.formatMessage({ id: "alt.construction" })}
            />
          </section>
        </div>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <div className={styles.projectsContainer}>
            <section>
              <Image
                src="/preview/preview_ids.webp"
                width={210}
                height={175}
                alt={intl.formatMessage({ id: "alt.previewIds" })}
              />
              <Link
                href="https://tunnisteportaali.kansalliskirjasto.fi/"
                hrefLang="x-default"
              >
                <FormattedMessage id="identifierServices.public" />
              </Link>
            </section>
            <section>
              <Image
                src="/preview/preview_idsa.webp"
                width={275}
                height={175}
                alt={intl.formatMessage({ id: "alt.previewIdsa" })}
              />
              <span>
                <FormattedMessage id="identifierServices.admin" />
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
