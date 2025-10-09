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
            <FormattedMessage id="fullStackDeveloper" />
          </li>
          <li>React, Meteor, Javascript, Node.js, MongoDB, HTML, CSS</li>
        </ul>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <Image
            data-theme={theme}
            src="/images/kk.avif"
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
          <li>
            React, Next.js, Javascript, HTML, CSS, Redux, Cypress, Figma & A11y
          </li>
        </ul>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <section>
            <Image
              src="/preview/qd.avif"
              width={210}
              height={175}
              alt={intl.formatMessage({ id: "alt.previewIds" })}
            />
            <Link
              href="https://qualitydesk.com/en/software/"
              hrefLang="x-default"
              target="_blank"
              rel="noopener noreferrer"
            >
              QualityDesk App
            </Link>
          </section>
        </div>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <div className={styles.projectsContainer}>
            <section>
              <Image
                src="/preview/preview_ids.avif"
                width={210}
                height={175}
                alt={intl.formatMessage({ id: "alt.previewIds" })}
              />
              <Link
                href="https://tunnisteportaali.kansalliskirjasto.fi/"
                hrefLang="x-default"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="identifierServices.public" />
              </Link>
            </section>
            <section>
              <Image
                src="/preview/preview_idsa.avif"
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
