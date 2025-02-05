import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import HeadComponent from "./pageComponents/Head";
import Header from "./headerComponents/Header";
import Footer from "./Footer";

import { ThemeContext } from "../context";
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

  const routeName = router.pathname.slice(1) || "home";

  const pageTitle = <FormattedMessage id={routeName} />;

  return (
    <>
      <section
        className={styles.skipLinks}
        aria-label={intl.formatMessage({ id: "aria.skiplinks" })}
        tabIndex={-1}
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
                alt={intl.formatMessage({ id: "alt.home" })}
                width={24}
                height={24}
              />
              <Link href="/">
                <FormattedMessage id="homePage" />
              </Link>
            </li>
            <li>
              <Image
                src={`/emojis/${routeName}.svg`}
                alt={`${routeName} emoji`}
                width={24}
                height={24}
              />
              {pageTitle}
            </li>
          </ul>
        )}
        <HeadComponent title={routeName} />
        {children}
      </main>
      <Footer />
    </>
  );
}
