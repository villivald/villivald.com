import Image from "next/image";
import Atropos from "atropos/react";

import CardFooter from "./subComponents/CardFooter";

import "atropos/css";
import styles from "../../styles/grid/BlogGrid.module.css";

const BlogGrid = () => {
  return (
    <div className={styles.container}>
      <Atropos className={styles.atropos}>
        <Image
          src="/images/cra.webp"
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          alt="Avatar"
          className={styles.image}
        />
      </Atropos>
      <CardFooter emoji="✏️" text="blog" />
    </div>
  );
};

export default BlogGrid;
