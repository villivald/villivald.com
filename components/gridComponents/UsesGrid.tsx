import { useState } from "react";

import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/UsesGrid.module.css";

const UsesGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      {!isOpen && <p className={styles.to}>TO</p>}
      <div
        data-isopen={isOpen}
        className={styles.parent}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div data-isopen={isOpen} className={styles.child} />
      </div>
      {!isOpen && <p className={styles.ls}>LS</p>}
      <CardFooter emoji="tools" text="uses" />
    </div>
  );
};

export default UsesGrid;
