import Image from "next/image";
import { useContext } from "react";
import { useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import { Locale } from "../../pages/_app";
import styles from "../../styles/Switch.module.css";

type Props = {
  changeLocale: () => void;
  locale: Locale;
};

export default function LanguageSwitch({ changeLocale, locale }: Props) {
  const theme = useContext(ThemeContext);
  const intl = useIntl();
  const isFinnish = locale === "fi";

  const handleChange = () => changeLocale();

  return (
    <>
      <p className={styles.mobileLanguageSwitch}>
        <button
          aria-label={intl.formatMessage({ id: "alt.languageSwitcher" })}
          onClick={handleChange}
          data-checked={isFinnish}
        ></button>
      </p>
      <p className={styles.languageSwitch}>
        <span>
          <span data-theme={theme}></span>
          <Image
            src="/emojis/eng.svg"
            alt={intl.formatMessage({ id: "alt.en" })}
            width={60}
            height={60}
          />
        </span>
        <Image
          className={isFinnish ? styles.arrowRight : styles.arrowLeft}
          data-theme={theme}
          src="/images/arrow.svg"
          alt={intl.formatMessage({ id: "alt.languageArrow" })}
          width={100}
          height={100}
        />
        <label className={styles.switch} htmlFor="switch" data-theme={theme}>
          <span>
            {intl.formatMessage({
              id: "alt.languageSwitcher",
            })}
          </span>
          <input
            id="switch"
            type="checkbox"
            role="switch"
            checked={isFinnish}
            onChange={handleChange}
            aria-label={intl.formatMessage({
              id: "alt.languageSwitcher",
            })}
          />
          <span data-theme={theme}></span>
        </label>
        <span>
          <span data-theme={theme}></span>
          <Image
            src="/emojis/fin.svg"
            alt={intl.formatMessage({ id: "alt.fi" })}
            width={60}
            height={60}
          />
        </span>
      </p>
    </>
  );
}
