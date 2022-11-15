import Link from "next/link";
import { useTheme } from "@mui/material/styles";

import styles from "../styles/Header.module.css";

import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";

type Props = {
  changeTheme: () => void;
  changeLocale: () => void;
};

const Header = ({ changeTheme, changeLocale }: Props) => {
  const theme = useTheme().palette.mode;

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: theme === "dark" ? "black" : "#5B5B5B" }}
    >
      <ThemeToggle changeTheme={changeTheme} theme={theme} />
      <Link href="/">
        <h1 className={styles.title}>villivald</h1>
      </Link>
      <LanguageSwitch changeLocale={changeLocale} />
      <DropdownMenu />
    </header>
  );
};

export default Header;
