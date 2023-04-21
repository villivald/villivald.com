import Head from "next/head";

import Statistics from "../components/pageComponents/Books/Statistics";

export default function statistics() {
  return (
    <>
      <Head>
        <title>Books statistics</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Statistics />
    </>
  );
}
