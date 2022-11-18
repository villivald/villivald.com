import Head from "next/head";

import Projects from "../components/pageComponents/Projects";

export default function projects() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Projects />
    </>
  );
}
