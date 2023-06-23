import Head from "next/head";
import { useIntl } from "react-intl";

import BooksComponent from "../components/pageComponents/Books/Books";

export default function Books() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "books" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BooksComponent />
    </>
  );
}
