import { useState } from "react";
import { Switch } from "@mui/material";

import styles from "../styles/Switch.module.css";

type Props = {
  changeLocale: () => void;
};

const LanguageSwitch = ({ changeLocale }: Props) => {
  const [checked, setChecked] = useState(false);

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
