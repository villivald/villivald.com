import Head from "next/head";

import Old from "../components/pageComponents/Old";

export default function old() {
  return (
    <>
      <Head>
        <title>Old versions of this website</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Old />
    </>
  );
}
