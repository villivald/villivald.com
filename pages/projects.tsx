import Head from "next/head";
import { useIntl } from "react-intl";

import ProjectsComponent from "../components/pageComponents/Projects";

export default function Projects() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "projects" })}</title>
        <meta
          name="description"
          content="my personal website made with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectsComponent />
    </>
  );
}
