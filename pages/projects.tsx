import Head from "next/head";

import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Header from "../components/Header";

export default function projects() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Projects />
      <Footer />
    </>
  );
}
