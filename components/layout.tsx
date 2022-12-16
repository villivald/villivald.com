import Header from "./headerComponents/Header";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";

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
      <main style={{ backgroundColor: theme === "dark" ? "#5B5B5B" : "" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
