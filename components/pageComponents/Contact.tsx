import Image from "next/image";

import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Image
          src="/emojis/mastodon.svg"
          width={500}
          height={500}
          alt="Contact"
        />
      </div>
      <div>
        <Image src="/emojis/email.svg" width={500} height={500} alt="Contact" />
      </div>
      <div>
        <Image
          src="/emojis/linkedin.svg"
          width={500}
          height={500}
          alt="Contact"
        />
      </div>
    </div>
  );
};

export default Contact;
