import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Amiko, Crete_Round, Istok_Web } from "next/font/google";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import Layout from "../components/layout";
import { ThemeContext } from "../context";
import { translations } from "../intl";

const THEME_STORAGE_KEY = "theme-preference";
export type Theme = "light" | "dark";

const getSystemTheme = (): Theme =>
  window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const readStoredTheme = (): Theme | null => {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
};

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
  const [theme, setTheme] = useState<Theme>("light");
  const [isThemeHydrated, setIsThemeHydrated] = useState(false);

  // Translations state
  const en: keyof typeof translations = "en";
  const fi: keyof typeof translations = "fi";

  const [locale, setLocale] = useState<keyof typeof translations>(en);

  useEffect(() => {
    const resolvedTheme = readStoredTheme() ?? getSystemTheme();
    setTheme(resolvedTheme);
    setIsThemeHydrated(true);
  }, []);

  useEffect(() => {
    if (!isThemeHydrated) return;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write issues (e.g. private mode restrictions).
    }
  }, [isThemeHydrated, theme]);

  // Handles theme change
  const changeTheme = () =>
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));

  // Handles language change
  const changeLocale = () => setLocale(locale === en ? fi : en);

  // Sets the document language (hack, need to think of a better way)
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className={`${crete.variable} ${amiko.variable} ${istok.variable}`}>
      <ThemeContext value={theme}>
        <IntlProvider locale={locale} messages={translations[locale]}>
          <Layout changeTheme={changeTheme} changeLocale={changeLocale}>
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ThemeContext>
      <Analytics />
    </div>
  );
}
