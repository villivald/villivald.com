import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Amiko, Crete_Round, Istok_Web } from "next/font/google";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import Layout from "../components/layout";
import { ThemeContext } from "../context";
import { translations } from "../intl";

const crete = Crete_Round({
  subsets: ["latin"],
  variable: "--font-header",
  display: "swap",
  weight: "400",
});

const amiko = Amiko({
  subsets: ["latin"],
  variable: "--font-subheader",
  display: "swap",
  weight: ["400", "600", "700"],
});

const istok = Istok_Web({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  // Theme state
  const [theme, setTheme] = useState("light");

  // Check for user's preferred theme from OS or browser
  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPrefersDark) {
      setTheme("dark");
    }
  }, []);

  // Translations state
  const en: keyof typeof translations = "en";
  const fi: keyof typeof translations = "fi";

  const [locale, setLocale] = useState<keyof typeof translations>(en);

  // Handles theme change
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Handles language change
  const changeLocale = () => setLocale(locale === en ? fi : en);

  // Handles translation errors
  const handleTranslationError = (error: Error) => {
    // Prevent excessive logging)
    return error;
  };

  // Sets the document language (hack, need to think of a better way)
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className={`${crete.variable} ${amiko.variable} ${istok.variable}`}>
      <ThemeContext value={theme}>
        <IntlProvider
          locale={locale}
          messages={translations[locale]}
          onError={handleTranslationError}
        >
          <Layout changeTheme={changeTheme} changeLocale={changeLocale}>
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ThemeContext>
      <Analytics />
    </div>
  );
}
