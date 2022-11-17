import { useState } from "react";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";

import styles from "../styles/Switch.module.css";

type Props = {
  changeLocale: () => void;
};

const LanguageSwitch = ({ changeLocale }: Props) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme().palette.mode;

  const handleChange = () => {
    setChecked(!checked);
    changeLocale();
  };

  return (
    <p className={styles.languageSwitch}>
      <span
        className={
          checked
            ? styles.languageSwitch__span
            : styles.languageSwitch__span_checked
        }
      >
        EN 🇺🇸
      </span>
      <Image
        className={checked ? styles.arrowRight : styles.arrowLeft}
        style={{
          filter: theme === "dark" ? "invert(1)" : "invert(0)",
        }}
        src="/images/arrow.svg"
        alt="Arrow pointing to the chosen language"
        width={100}
        height={100}
      />
      <Switch checked={checked} onChange={handleChange} />
      <span
        className={
          checked
            ? styles.languageSwitch__span_checked
            : styles.languageSwitch__span
        }
      >
        FI 🇫🇮
      </span>
    </p>
  );
};

export default LanguageSwitch;
