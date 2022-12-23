import Image from "next/image";
import { FormattedMessage } from "react-intl";
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
          sizes="(max-width: 600px) 100vw, 600px"
          alt="Avatar"
          className={styles.image}
        />
      </Atropos>
      <div className={styles.gridFooter}>
        <p>
          ✏️ <FormattedMessage id="blog" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default BlogGrid;
