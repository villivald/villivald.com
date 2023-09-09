import Image from "next/image";
import Atropos from "atropos/react";
import { useIntl } from "react-intl";

import CardFooter from "./subComponents/CardFooter";

import "atropos/css";
import styles from "../../styles/grid/BlogGrid.module.css";

export default function BlogGrid() {
  const intl = useIntl();

  // Check if prefers reduced motion is enabled
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={styles.container}>
      <Atropos
        className={styles.atropos}
        rotate={prefersReducedMotion ? false : true}
        activeOffset={prefersReducedMotion ? 0 : 50}
        shadow={prefersReducedMotion ? false : true}
      >
        <Image
          src="/images/cra.webp"
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
