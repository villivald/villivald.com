import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";

import styles from "../../styles/grid/BlogGrid.module.css";

const BlogGrid = () => {
  return (
    <Atropos className={styles.atropos}>
      <Image
        src="/images/cra.png"
        width={100}
        height={100}
        alt="Avatar"
        className={styles.image}
      />
    </Atropos>
  );
};

export default BlogGrid;
