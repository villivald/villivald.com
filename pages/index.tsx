import Head from "next/head";

import Grid from "../components/Grid";

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

      <Grid />
    </>
  );
}
