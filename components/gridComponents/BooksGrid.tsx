import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/BooksGrid.module.css";

const BooksGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      scale: 2,
      rotate: [0, 0, 180, 180, 360, 360],
      backgroundColor: "#000",
    },
    closed: { scale: 1, rotate: 0 },
  };

  return (
    <motion.div
      className={styles.box}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    >
      <h1>
        <FormattedMessage id="books" />
      </h1>
      <div className={styles.gridFooter}>
        <p>
          📖 <FormattedMessage id="books" />
        </p>
        <p>↗</p>
      </div>
    </motion.div>
  );
};

export default BooksGrid;
