import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Books from "../components/pagesComponents/BooksPage";

export default function BooksPage({ toggleTheme, selectedTheme }) {
  return (
    <div>
      <Head>
        <title>Books</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header toggleTheme={toggleTheme} theme={selectedTheme} />
        <Menu />
        <Books />
      </main>

      <Footer />
    </div>
  );
}
