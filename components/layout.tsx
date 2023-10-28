import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";

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
  const intl = useIntl();

  const pageTitle = <FormattedMessage id={router.pathname.slice(1)} />;

  return (
    <>
      <section
        tabIndex={0}
        className={styles.skipLinks}
        aria-label={intl.formatMessage({ id: "aria.skiplinks" })}
      >
        <a href="#mainContent">
          <FormattedMessage id="skiplink.mainContent" />
        </a>
        <a href="#contactsLinks">
          <FormattedMessage id="skiplink.contactsLinks" />
        </a>
      </section>
      <Header changeTheme={changeTheme} changeLocale={changeLocale} />
      <main
        id="mainContent"
        className={styles.main}
        data-theme={theme}
        data-books={router.pathname === "/books"}
      >
        {router.pathname !== "/" && (
          <ul className={styles.breadcrumbs}>
            <li>
              <Image
                src="/emojis/home.svg"
                alt="home emoji"
                width={24}
                height={24}
              />
              <Link href="/">
                <FormattedMessage id="homePage" />
              </Link>
            </li>
            <li>
              <Image
                src={`/emojis/${router.pathname.slice(1)}.svg`}
                alt={`${router.pathname.slice(1)} emoji`}
                width={24}
                height={24}
              />
              {pageTitle}
            </li>
          </ul>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}
