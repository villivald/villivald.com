import Image from "next/image";

import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/ContactGrid.module.css";

const ContactGrid = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <Image
        src="/images/phone.webp"
        className={styles.phone}
        alt="phone"
        width={200}
        height={200}
      />
      <CardFooter emoji="phone" text="contact" />
    </div>
  );
};

export default ContactGrid;
