import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <div className={styles.mainContainer} data-theme={theme}>
      <div>
        <Link
          href="https://bsky.app/profile/villivald.com"
          target="_blank"
          rel="noopener noreferrer"
          hrefLang="en"
        >
          <Image
            src="/emojis/bluesky.svg"
            width={400}
            height={400}
            alt={intl.formatMessage({ id: "contact.link.bluesky" })}
          />
        </Link>
      </div>
      <div>
        <Link
          href="mailto:maxim@villivald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/emojis/email.svg"
            width={500}
            height={500}
            alt={intl.formatMessage({ id: "contact.link.mail" })}
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/villivald/"
          target="_blank"
          rel="noopener noreferrer"
          hrefLang="en"
        >
          <Image
            src="/emojis/linkedin.svg"
            width={500}
            height={500}
            alt={intl.formatMessage({ id: "contact.link.linkedin" })}
          />
        </Link>
      </div>
    </div>
  );
}
