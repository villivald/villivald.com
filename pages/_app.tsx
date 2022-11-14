import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../styles/globals.css";
import Layout from "../components/layout";
import { translations } from "../intl";

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
  // State for theme
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState("light");

  // State for translations
  const en: keyof typeof translations = "en";
  const fi: keyof typeof translations = "fi";

  const [locale, setLocale] = useState<keyof typeof translations>(en);

  // Handles theme change
  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  // Handles language change
  const changeLocale = () => {
    setLocale(locale === en ? fi : en);
  };

  useEffect(() => {
    setActiveTheme("light" ? lightTheme : darkTheme);
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Layout
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
          changeLocale={changeLocale}
        >
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ThemeProvider>
  );
}
