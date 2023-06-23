import Head from "next/head";
import { useIntl } from "react-intl";

import BlogComponent from "../components/pageComponents/Blog/Blog";

export default function Blog() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "blog" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogComponent />
    </>
  );
}
