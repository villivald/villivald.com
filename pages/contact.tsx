import Head from "next/head";
import { useIntl } from "react-intl";

import ContactComponent from "../components/pageComponents/Contact";

export default function Contact() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "contact" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactComponent />
    </>
  );
}
