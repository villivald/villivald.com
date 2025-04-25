import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "../../context";
import styles from "../../styles/Header.module.css";
import DropdownMenu from "./DropdownMenu";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

type Props = {
  changeTheme: () => void;
  changeLocale: () => void;
};

export default function Header({ changeTheme, changeLocale }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.header} data-theme={theme}>
      <ThemeToggle changeTheme={changeTheme} theme={theme} />
      <Link href="/">
        <h1 className={styles.title}>villivald</h1>
      </Link>
      <LanguageSwitch changeLocale={changeLocale} />
      <DropdownMenu />
    </header>
  );
}
