import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  toggleTheme: () => void;
  selectedTheme: string;
  changeLocale: () => void;
};

export default function Layout({
  children,
  toggleTheme,
  selectedTheme,
  changeLocale,
}: Props) {
  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        theme={selectedTheme}
        changeLocale={changeLocale}
      />
      <main>{children}</main>
      <Footer theme={selectedTheme} />
    </>
  );
}
