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
const LOCALE_STORAGE_KEY = "locale-preference";

export type Theme = "light" | "dark";
export type Locale = keyof typeof translations;

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

const getSystemLocale = (): Locale => {
  const preferredLocale =
    navigator.languages?.[0] ?? navigator.language ?? navigator.languages?.[1];

  return preferredLocale?.toLowerCase().startsWith("fi") ? "fi" : "en";
};

const readStoredLocale = (): Locale | null => {
  try {
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    return storedLocale === "en" || storedLocale === "fi" ? storedLocale : null;
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
  const [locale, setLocale] = useState<Locale>("en");
  const [isLocaleHydrated, setIsLocaleHydrated] = useState(false);

  useEffect(() => {
    const resolvedTheme = readStoredTheme() ?? getSystemTheme();
    setTheme(resolvedTheme);
    setIsThemeHydrated(true);
  }, []);

  useEffect(() => {
    const resolvedLocale = readStoredLocale() ?? getSystemLocale();
    setLocale(resolvedLocale);
    setIsLocaleHydrated(true);
  }, []);

  useEffect(() => {
    if (!isThemeHydrated) return;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write issues (e.g. private mode restrictions).
    }
  }, [isThemeHydrated, theme]);

  useEffect(() => {
    if (!isLocaleHydrated) return;

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage write issues (e.g. private mode restrictions).
    }
  }, [isLocaleHydrated, locale]);

  // Handles theme change
  const changeTheme = () =>
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));

  // Handles language change
  const changeLocale = () =>
    setLocale((previousLocale) => (previousLocale === "en" ? "fi" : "en"));

  // Keep the document language synchronized with active locale.
  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <div className={`${crete.variable} ${amiko.variable} ${istok.variable}`}>
      <ThemeContext value={theme}>
        <IntlProvider locale={locale} messages={translations[locale]}>
          <Layout
            changeTheme={changeTheme}
            changeLocale={changeLocale}
            locale={locale}
          >
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ThemeContext>
      <Analytics />
    </div>
  );
}
