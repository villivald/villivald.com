import Head from "next/head";

import Blog from "../components/Blog";

export default function blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blog />
    </>
  );
}
