import Head from "next/head";
import { useIntl } from "react-intl";

import StatisticsComponent from "../components/pageComponents/Books/Statistics";

export default function Statistics() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "statistics" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StatisticsComponent />
    </>
  );
}
