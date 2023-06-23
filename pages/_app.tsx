import type { AppProps } from "next/app";
import { Amiko, Crete_Round, Istok_Web } from "next/font/google";
import { useState } from "react";
import { IntlProvider } from "react-intl";

import { ThemeContext } from "../context";
import Layout from "../components/layout";
import { translations } from "../intl";

import "../styles/globals.css";

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

  return (
    <div className={`${crete.variable} ${amiko.variable} ${istok.variable}`}>
      <ThemeContext.Provider value={theme}>
        <IntlProvider
          locale={locale}
          messages={translations[locale]}
          onError={handleTranslationError}
        >
          <Layout changeTheme={changeTheme} changeLocale={changeLocale}>
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ThemeContext.Provider>
    </div>
  );
}
