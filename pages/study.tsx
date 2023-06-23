import Head from "next/head";
import { useIntl } from "react-intl";

import styles from "../styles/Studies.module.css";

import StudiesComponent from "../components/pageComponents/Studies/Studies.mdx";

export default function Study() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "study" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContainer}>
        <StudiesComponent />
      </div>
    </>
  );
}
