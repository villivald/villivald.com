import { useState } from "react";
import Image from "next/image";
import { useContext } from "react";

import { colors } from "../../utils/colors";
import { ThemeContext } from "../../context";

import styles from "../../styles/Switch.module.css";

type Props = {
  changeLocale: () => void;
};

const LanguageSwitch = ({ changeLocale }: Props) => {
  const [checked, setChecked] = useState(false);
  const theme = useContext(ThemeContext);

  const handleChange = () => {
    setChecked(!checked);
    changeLocale();
  };

  return (
    <>
      <p className={styles.mobileLanguageSwitch}>
        <button
          aria-label="website language switcher"
          onClick={handleChange}
          className={styles.mobileLanguageSwitchButton}
          style={{
            backgroundImage: `url(${
              checked ? "/emojis/fin.svg" : "/emojis/eng.svg"
            })`,
          }}
        ></button>
      </p>
      <p className={styles.languageSwitch}>
        <span>
          <span
            style={{
              borderColor: theme === "dark" ? colors.dark : colors.green,
            }}
          ></span>
          <Image
            src="/emojis/eng.svg"
            alt="emoji icon - english (usa flag)"
            width={60}
            height={60}
          />
        </span>
        <Image
          className={checked ? styles.arrowRight : styles.arrowLeft}
          style={{
            filter: theme === "dark" ? "invert(1)" : "invert(0)",
          }}
          src="/images/arrow.svg"
          alt="Arrow pointing to the chosen language of the website"
          width={100}
          height={100}
        />
        <label className={styles.switch}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span></span>
        </label>
        <span>
          <span
            style={{
              borderColor: theme === "dark" ? colors.dark : colors.green,
            }}
          ></span>
          <Image
            src="/emojis/fin.svg"
            alt="emoji icon - finnish (flag)"
            width={60}
            height={60}
          />
        </span>
      </p>
    </>
  );
};

export default LanguageSwitch;
