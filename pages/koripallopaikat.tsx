import Head from "next/head";
import { useIntl } from "react-intl";

import KoripallopaikatComponent from "../components/pageComponents/Koripallopaikat";

export default function Koripallopaikat() {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "koripallopaikat" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KoripallopaikatComponent />
    </>
  );
}
