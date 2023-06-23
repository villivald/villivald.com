import Head from "next/head";
import { useIntl } from "react-intl";

import OldComponent from "../components/pageComponents/Old";

export default function Old() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "old" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OldComponent />
    </>
  );
}
