import Header from "./headerComponents/Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  changeTheme: () => void;
  changeLocale: () => void;
};

export default function Layout({ children, changeTheme, changeLocale }: Props) {
  return (
    <>
      <Header changeTheme={changeTheme} changeLocale={changeLocale} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
