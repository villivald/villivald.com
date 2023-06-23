import Head from "next/head";
import { useIntl } from "react-intl";

import Grid from "../components/Grid";

export default function Home() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "homePage" })}</title>
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
