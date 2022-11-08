import Head from "next/head";

import Footer from "../components/Footer";
import Books from "../components/Books";
import Header from "../components/Header";

export default function books() {
  return (
    <>
      <Head>
        <title>Books I Read</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Books />
      <Footer />
    </>
  );
}
