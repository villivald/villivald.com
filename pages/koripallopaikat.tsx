import Head from "next/head";

import Koripallopaikat from "../components/Koripallopaikat";

export default function koripallopaikat() {
  return (
    <>
      <Head>
        <title>Koripallopaikat</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Koripallopaikat />
    </>
  );
}
