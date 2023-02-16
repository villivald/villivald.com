import { useContext } from "react";

import { ThemeContext } from "../context";
import { colors, gradients } from "../utils/colors";

import Header from "./headerComponents/Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  changeTheme: () => void;
  changeLocale: () => void;
};

export default function Layout({ children, changeTheme, changeLocale }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header changeTheme={changeTheme} changeLocale={changeLocale} />
      <main
        style={{
          backgroundColor: theme === "dark" ? colors.dark80 : colors.grey,
          backgroundImage: theme === "dark" ? "none" : gradients.light,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
