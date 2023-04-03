import Head from "next/head";

import Books from "../components/pageComponents/Books/Books";

export default function books() {
  return (
    <>
      <Head>
        <title>Books I Read</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Books />
    </>
  );
}
