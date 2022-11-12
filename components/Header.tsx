import Link from "next/link";

import styles from "../styles/Header.module.css";

import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggle";

type Props = {
  toggleTheme: () => void;
  theme: string;
};

const Header = ({ toggleTheme, theme }: Props) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: theme === "dark" ? "black" : "" }}
    >
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Link href="/">
        <h1 className={styles.title}>villivald</h1>
      </Link>
      <DropdownMenu />
    </header>
  );
};

export default Header;
