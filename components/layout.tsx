import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  toggleTheme: () => void;
  selectedTheme: string;
};

export default function Layout({
  children,
  toggleTheme,
  selectedTheme,
}: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={selectedTheme} />
      <main>{children}</main>
      <Footer theme={selectedTheme} />
    </>
  );
}
