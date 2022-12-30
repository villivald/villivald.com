import Image from "next/image";
import { IconButton } from "@mui/material";

import styles from "../../styles/ThemeToggle.module.css";

type Props = {
  changeTheme: () => void;
  theme: string;
};

const ThemeToggle = ({ changeTheme, theme }: Props) => {
  return (
    <div className={styles.themeToggle}>
      <IconButton aria-label="changeThemeButton" onClick={changeTheme}>
        <Image
          style={{
            filter: theme === "dark" ? "invert(1)" : "invert(0)",
          }}
          src={`/emojis/${theme === "dark" ? "dark" : "light"}.svg`}
          alt="emoji icon - light/dark theme switcher"
          width={48}
          height={48}
        />
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
