import "atropos/css";

import Atropos from "atropos/react";
import Image from "next/image";
import { useIntl } from "react-intl";

import styles from "../../styles/grid/BlogGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function BlogGrid() {
  const intl = useIntl();

  // Check if prefers reduced motion is enabled
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={styles.container} aria-hidden="true">
      <Atropos
        className={styles.atropos}
        rotate={prefersReducedMotion ? false : true}
        activeOffset={prefersReducedMotion ? 0 : 50}
        shadow={prefersReducedMotion ? false : true}
      >
        <Image
          src="/images/cra.avif"
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          alt={intl.formatMessage({ id: "alt.blogLogo" })}
          className={styles.image}
        />
      </Atropos>
      <CardFooter emoji="blog" text="blog" />
    </div>
  );
}
