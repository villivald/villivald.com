import Atropos from "atropos/react";
import Image from "next/image";
import { useState } from "react";
import { useIntl } from "react-intl";

import styles from "../../styles/grid/UsesGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function UsesGrid() {
  const [isOpen, setIsOpen] = useState(false);

  const intl = useIntl();

  // Check if prefers reduced motion is enabled
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={styles.container} aria-hidden="true">
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
              height={isOpen ? 100 : 40}
              src="/emojis/toolbox.svg"
              alt={intl.formatMessage({ id: "alt.toolbox" })}
            />
          </Atropos>
        </div>
      </div>
      {!isOpen && <p className={styles.ls}>LS</p>}
      <CardFooter emoji="uses" text="uses" />
    </div>
  );
}
