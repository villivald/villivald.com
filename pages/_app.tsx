import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme("light" ? lightTheme : darkTheme);
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <Component
        {...pageProps}
        toggleTheme={toggleTheme}
        selectedTheme={selectedTheme}
        lightTheme={lightTheme}
      />
    </ThemeProvider>
  );
}
