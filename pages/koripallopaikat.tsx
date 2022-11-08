import Head from "next/head";

import Footer from "../components/Footer";
import Koripallopaikat from "../components/Koripallopaikat";
import Header from "../components/Header";

export default function koripallopaikat() {
  return (
    <>
      <Head>
        <title>Koripallopaikat</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Koripallopaikat />
      <Footer />
    </>
  );
}
