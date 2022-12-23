import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/UsesGrid.module.css";

const UsesGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      {!isOpen && <p className={styles.to}>TO</p>}
      <motion.div
        layout
        data-isopen={isOpen}
        initial={{ borderRadius: 50 }}
        className={styles.parent}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <motion.div layout data-isopen={isOpen} className={styles.child} />
      </motion.div>
      {!isOpen && <p className={styles.ls}>LS</p>}

      <div className={styles.gridFooter}>
        <p>
          🛠️ <FormattedMessage id="uses" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default UsesGrid;
