import Image from "next/image";
import { useIntl } from "react-intl";

import styles from "../../styles/ThemeToggle.module.css";

type Props = {
  changeTheme: () => void;
  theme: string;
};

export default function ThemeToggle({ changeTheme, theme }: Props) {
  const intl = useIntl();

  return (
    <button
      aria-label={
        theme === "dark"
          ? intl.formatMessage({ id: "aria.switchToLight" })
          : intl.formatMessage({ id: "aria.switchToDark" })
      }
      onClick={changeTheme}
      className={styles.button}
      data-theme={theme}
    >
      <Image
        data-theme={theme}
        src={`/emojis/${theme === "dark" ? "dark" : "light"}.svg`}
        alt={intl.formatMessage({ id: "alt.theme" })}
        width={48}
        height={48}
      />
    </button>
  );
}
