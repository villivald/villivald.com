import Head from "next/head";

import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";

type Props = {
  toggleTheme: () => void;
  selectedTheme: string;
};

export default function Home({ toggleTheme, selectedTheme }: Props) {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleTheme={toggleTheme} theme={selectedTheme} />
      <Grid />
      <Footer theme={selectedTheme} />
    </>
  );
}
