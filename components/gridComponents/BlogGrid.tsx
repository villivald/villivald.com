import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";

import styles from "../../styles/grid/BlogGrid.module.css";

const BlogGrid = () => {
  return (
    <div className={styles.container}>
      <Atropos className={styles.atropos}>
        <Image
          src="/images/cra.webp"
          fill
          alt="Avatar"
          className={styles.image}
        />
      </Atropos>
      <div className={styles.gridFooter}>
        <p>✏️Blog</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default BlogGrid;
