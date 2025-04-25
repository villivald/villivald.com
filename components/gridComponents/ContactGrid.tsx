import Image from "next/image";
import { useIntl } from "react-intl";

import styles from "../../styles/grid/ContactGrid.module.css";
import CardFooter from "./subComponents/CardFooter";

export default function ContactGrid() {
  const intl = useIntl();

  return (
    <div className={styles.container} aria-hidden="true">
      <div></div>
      <Image
        src="/images/phone.avif"
        className={styles.phone}
        alt={intl.formatMessage({ id: "alt.contact" })}
        width={200}
        height={200}
      />
      <CardFooter emoji="contact" text="contact" />
      <CardFooter emoji="contact" text="contactMobile" />
    </div>
  );
}
