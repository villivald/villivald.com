import Head from "next/head";

import Uses from "../components/pageComponents/Uses";

export default function uses() {
  return (
    <>
      <Head>
        <title>Things I Use</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Uses />
    </>
  );
}
