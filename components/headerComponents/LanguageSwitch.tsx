import { useState, useContext } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Switch.module.css";

type Props = {
  changeLocale: () => void;
};

const LanguageSwitch = ({ changeLocale }: Props) => {
  const [checked, setChecked] = useState(false);
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const handleChange = () => {
    setChecked(!checked);
    changeLocale();
  };

  return (
    <>
      <p className={styles.mobileLanguageSwitch}>
        <button
          aria-label={intl.formatMessage({ id: "alt.mobileLanguageSwitcher" })}
          onClick={handleChange}
          data-checked={checked}
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
          className={checked ? styles.arrowRight : styles.arrowLeft}
          data-theme={theme}
          src="/images/arrow.svg"
          alt={intl.formatMessage({ id: "alt.languageArrow" })}
          width={100}
          height={100}
        />
        <label className={styles.switch}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
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
};

export default LanguageSwitch;
