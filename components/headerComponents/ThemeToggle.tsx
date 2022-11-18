import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import styles from "../../styles/ThemeToggle.module.css";

type Props = {
  changeTheme: () => void;
  theme: string;
};

const ThemeToggle = ({ changeTheme, theme }: Props) => {
  return (
    <div className={styles.themeToggle}>
      <LightModeIcon
        className={
          theme === "dark"
            ? styles.lightModeIcon_dark
            : styles.lightModeIcon_light
        }
      />
      <Switch checked={theme === "dark"} onChange={changeTheme} />
      <DarkModeIcon
        className={
          theme === "dark"
            ? styles.darkModeIcon_dark
            : styles.darkModeIcon_light
        }
      />
    </div>
  );
};

export default ThemeToggle;
