import Image from "next/image";
import { useIntl } from "react-intl";

import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/ContactGrid.module.css";

export default function ContactGrid() {
  const intl = useIntl();

  return (
    <div className={styles.container} aria-hidden="true">
      <div></div>
      <Image
        src="/images/phone.webp"
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
