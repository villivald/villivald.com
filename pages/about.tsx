import Head from "next/head";
import { useIntl } from "react-intl";

import AboutComponent from "../components/pageComponents/About";

export default function About() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "about" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutComponent />
    </>
  );
}
