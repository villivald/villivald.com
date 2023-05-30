import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

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
  const router = useRouter();

  const pageTitle = <FormattedMessage id={router.pathname.slice(1)} />;

  return (
    <>
      <Header changeTheme={changeTheme} changeLocale={changeLocale} />
      {router.pathname !== "/" && (
        <ul className={styles.breadcrumbs}>
          <li>
            <Link href="/">
              <FormattedMessage id="homePage" />
            </Link>
          </li>
          <li>{pageTitle}</li>
        </ul>
      )}
      <main
        className={styles.main}
        data-theme={theme}
        data-books={router.pathname === "/books"}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
