import Image from "next/image";
import Atropos from "atropos/react";
import { useIntl } from "react-intl";

import CardFooter from "./subComponents/CardFooter";

import "atropos/css";
import styles from "../../styles/grid/BlogGrid.module.css";

const BlogGrid = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <Atropos className={styles.atropos}>
        <Image
          src="/images/cra.webp"
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          alt={intl.formatMessage({ id: "alt.blogLogo" })}
          className={styles.image}
        />
      </Atropos>
      <CardFooter emoji="blog" text="blog" />
    </div>
  );
};

export default BlogGrid;
