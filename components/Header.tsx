import Link from "next/link";
import { Switch } from "@mui/material";

import styles from "../styles/Header.module.css";

import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggle";

type Props = {
  toggleTheme: () => void;
  theme: string;
  changeLocale: () => void;
};

const Header = ({ toggleTheme, theme, changeLocale }: Props) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: theme === "dark" ? "black" : "" }}
    >
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Link href="/">
        <h1 className={styles.title}>villivald</h1>
      </Link>
      <Switch onChange={() => changeLocale()} />
      <DropdownMenu />
    </header>
  );
};

export default Header;
