import Head from "next/head";

import Studies from "../components/Studies";

export default function study() {
  return (
    <>
      <Head>
        <title>My Studies</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Studies />
    </>
  );
}
