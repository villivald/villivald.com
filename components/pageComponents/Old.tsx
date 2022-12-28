import Image from "next/image";
import styles from "../../styles/Old.module.css";

const Old = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div>
            <p>First version of my website from 2019</p>
            <Image
              src="/images/cat.webp"
              width={300}
              height={300}
              alt={"First version of my website from 2019"}
            />
            <p>css, js, bootstrap, html</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <p>First version of my website from 2019</p>
            <Image
              src="/images/cat.webp"
              width={300}
              height={300}
              alt={"First version of my website from 2019"}
            />
            <p>css, js, bootstrap, html</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <p>First version of my website from 2019</p>
            <Image
              src="/images/cat.webp"
              width={300}
              height={300}
              alt={"First version of my website from 2019"}
            />
            <p>css, js, bootstrap, html</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Old;
