import Head from "next/head";

import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Header from "../components/Header";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Contact />
      <Footer />
    </>
  );
}
