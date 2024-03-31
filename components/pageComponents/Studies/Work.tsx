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
          <FormattedMessage id="Work" />
        </h1>
        <Image
          src="/emojis/work.svg"
          alt={intl.formatMessage({ id: "alt.TODO" })}
          width={36}
          height={36}
        />
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <Image
            src="/images/qualitydesk.png"
            alt={intl.formatMessage({ id: "alt.TODO" })}
            width={24}
            height={24}
          />
          <h2>QualityDesk</h2>
        </div>

        <ul>
          <li>(2024 →)</li>

          <li>XXXXXXXXXXXXX</li>
        </ul>
      </div>

      <div>
        <div className={styles.emojiContainer}>
          <Image
            data-theme={theme}
            src="/images/kk.webp"
            alt={intl.formatMessage({ id: "alt.TODO" })}
            width={24}
            height={24}
          />
          <h2>
            <FormattedMessage id="nationalLibrary" />
          </h2>
        </div>

        <ul>
          <li>(2022 - 2024)</li>

          <li>XXXXXXXXXXXX</li>
        </ul>
      </div>
    </div>
  );
}
