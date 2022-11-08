import Head from "next/head";

import Footer from "../components/Footer";
import Uses from "../components/Uses";
import Header from "../components/Header";

export default function uses() {
  return (
    <>
      <Head>
        <title>Things I Use</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Uses />
      <Footer />
    </>
  );
}
