import { useTheme } from "@mui/material/styles";

import { colors, gradients } from "../utils/colors";

import Header from "./headerComponents/Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  changeTheme: () => void;
  changeLocale: () => void;
};

export default function Layout({ children, changeTheme, changeLocale }: Props) {
  const theme = useTheme().palette.mode;

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
