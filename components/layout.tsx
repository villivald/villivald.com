import { useContext } from "react";

import { ThemeContext } from "../context";

import Header from "./headerComponents/Header";
import Footer from "./Footer";

import styles from "../styles/Layout.module.css";

type Props = {
  children: React.ReactNode;
  changeTheme: () => void;
  changeLocale: () => void;
};

export default function Layout({ children, changeTheme, changeLocale }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header changeTheme={changeTheme} changeLocale={changeLocale} />
      <main className={styles.main} data-theme={theme}>
        {children}
      </main>
      <Footer />
    </>
  );
}
