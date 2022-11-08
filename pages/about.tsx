import Head from "next/head";

import Footer from "../components/Footer";
import About from "../components/About";
import Header from "../components/Header";

export default function about() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Footer />
    </>
  );
}
