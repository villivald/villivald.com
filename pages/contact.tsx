import Head from "next/head";

import Contact from "../components/pageComponents/Contact";

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

      <Contact />
    </>
  );
}
