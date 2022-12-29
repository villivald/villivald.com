import { useState } from "react";
import { motion } from "framer-motion";

import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/BooksGrid.module.css";

type VariantsType = {
  open: object;
  closed: object;
};

const BooksGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants: VariantsType = {
    open: {
      scale: 2,
      rotate: [0, 0, 180, 180, 360, 360],
      backgroundColor: "#000",
    },
    closed: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <div className={styles.container}>
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
      ></motion.div>
      <CardFooter emoji="books" text="books" />
    </div>
  );
};

export default BooksGrid;
