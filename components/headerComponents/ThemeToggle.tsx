import Image from "next/image";

import styles from "../../styles/ThemeToggle.module.css";

type Props = {
  changeTheme: () => void;
  theme: string;
};

const ThemeToggle = ({ changeTheme, theme }: Props) => {
  return (
    <button
      aria-label="changeThemeButton"
      onClick={changeTheme}
      className={styles.button}
    >
      <Image
        style={{
          filter: theme === "dark" ? "invert(1)" : "invert(0)",
        }}
        src={`/emojis/${theme === "dark" ? "dark" : "light"}.svg`}
        alt="emoji icon - light/dark theme switcher"
        width={48}
        height={48}
      />
    </button>
  );
};

export default ThemeToggle;
