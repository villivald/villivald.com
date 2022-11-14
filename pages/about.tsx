import Head from "next/head";

import About from "../components/About";

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

      <About />
    </>
  );
}
