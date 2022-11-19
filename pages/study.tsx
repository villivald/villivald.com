import Head from "next/head";

import styles from "../styles/Studies.module.css";

import Studies from "../components/pageComponents/Studies.mdx";

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

      <div className={styles.mainContainer}>
        <Studies />
      </div>
    </>
  );
}
