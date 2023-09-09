import { useState } from "react";
import Image from "next/image";
import Atropos from "atropos/react";

import CardFooter from "./subComponents/CardFooter";

import styles from "../../styles/grid/UsesGrid.module.css";

export default function UsesGrid() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if prefers reduced motion is enabled
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={styles.container}>
      {!isOpen && <p className={styles.to}>TO</p>}
      <div
        data-isopen={isOpen}
        className={styles.parent}
        onMouseEnter={() => !prefersReducedMotion && setIsOpen(true)}
        onMouseLeave={() => !prefersReducedMotion && setIsOpen(false)}
      >
        <div data-isopen={isOpen} className={styles.child}>
          <Atropos>
            <Image
              className={styles.emoji}
              width={100}
              height={100}
              src="/emojis/toolbox.svg"
              alt="toolbox emoji"
            />
          </Atropos>
        </div>
      </div>
      {!isOpen && <p className={styles.ls}>LS</p>}
      <CardFooter emoji="uses" text="uses" />
    </div>
  );
}
