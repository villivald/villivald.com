import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/StudyGrid.module.css";

const StudyGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      opacity: 0,
      scale: 0.1,
      rotate: 720,
    },
    closed: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
  };

  const variants_alt = {
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    closed: {
      opacity: 0,
      scale: 0.1,
      rotate: 720,
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.image}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1, rotate: 720 }}
        className={styles.image_alt}
        animate={isOpen ? "open" : "closed"}
        variants={variants_alt}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      ></motion.div>
      <div className={styles.gridFooter}>
        <p>
          🎓 <FormattedMessage id="study" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default StudyGrid;
