import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>villivald</h1>
      </Link>
    </header>
  );
};

export default Header;
