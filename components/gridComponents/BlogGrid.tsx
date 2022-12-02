import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";

import styles from "../../styles/grid/BlogGrid.module.css";

const BlogGrid = () => {
  return (
    <Atropos className={styles.atropos}>
      <Image
        src="/images/cra.png"
        width={400}
        height={400}
        alt="Avatar"
        className={styles.image}
      />
      <div className={styles.gridFooter}>
        <p>✏️Blog</p>
        <p>↗</p>
      </div>
    </Atropos>
  );
};

export default BlogGrid;
