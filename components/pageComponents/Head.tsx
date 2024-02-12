import Head from "next/head";
import { useIntl } from "react-intl";

export default function HeadComponent({ title }: { title: string }) {
  const intl = useIntl();

  return (
    <Head>
      <title>
        {`Villivald.com | ${intl.formatMessage({ id: `title.${title}` })}`}
      </title>
      <meta
        name="description"
        content={intl.formatMessage({ id: `description.${title}` })}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
