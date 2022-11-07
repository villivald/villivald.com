import Head from "next/head";

import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
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

      <Header />
      <Grid />
      <Footer />
    </>
  );
}
