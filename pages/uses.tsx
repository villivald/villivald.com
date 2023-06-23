import Head from "next/head";
import { useIntl } from "react-intl";

import UsesComponent from "../components/pageComponents/Uses";

export default function Uses() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "uses" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UsesComponent />
    </>
  );
}
