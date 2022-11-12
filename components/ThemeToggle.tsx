import Switch from "@mui/material/Switch";

import styles from "../styles/ThemeToggle.module.css";

type Props = {
  toggleTheme: () => void;
  theme: string;
};

const ThemeToggle = ({ toggleTheme, theme }: Props) => {
  return (
    <Switch
      className={styles.themeToggle}
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
