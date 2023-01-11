import { useState } from "react";
import Image from "next/image";

import { Switch, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Language";

import { colors } from "../../utils/colors";

import styles from "../../styles/Switch.module.css";

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
    <>
      <p className={styles.mobileLanguageSwitch}>
        <IconButton
          aria-label="website language switcher"
          onClick={handleChange}
          style={{ color: theme === "dark" ? colors.white : colors.dark }}
        >
          <LanguageIcon /> {checked ? "EN" : "FI"}
        </IconButton>
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
        <Switch checked={checked} onChange={handleChange} />
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
