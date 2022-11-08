import Head from "next/head";

import Footer from "../components/Footer";
import Studies from "../components/Studies";
import Header from "../components/Header";

export default function study() {
  return (
    <>
      <Head>
        <title>My Studies</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Studies />
      <Footer />
    </>
  );
}
