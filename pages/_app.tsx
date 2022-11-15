import type { AppProps } from "next/app";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "../components/layout";
import { translations } from "../intl";

import "../styles/globals.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // Theme state
  const [theme, setTheme] = useState(lightTheme);

  // Translations state
  const en: keyof typeof translations = "en";
  const fi: keyof typeof translations = "fi";

  const [locale, setLocale] = useState<keyof typeof translations>(en);

  // Handles theme change
  const changeTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  // Handles language change
  const changeLocale = () => {
    setLocale(locale === en ? fi : en);
  };

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Layout changeTheme={changeTheme} changeLocale={changeLocale}>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ThemeProvider>
  );
}
