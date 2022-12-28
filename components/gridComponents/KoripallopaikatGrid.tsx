import Image from "next/image";

import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/KoripallopaikatGrid.module.css";

const KoripallopaikatGrid = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/caruso.webp"
        width={400}
        height={400}
        alt="Avatar"
        className={styles.image}
      />
      <p className={styles.goat}>GOAT</p>
      <div className={styles.overlay}>
        <div>
          <Image
            fill
            sizes="100%"
            src="/images/koripallopaikat.svg"
            alt="Koripallopaikat"
            className={styles.logo}
          />
        </div>
        <CardFooter emoji="🏀" text="koripallopaikat" />
      </div>
    </div>
  );
};

export default KoripallopaikatGrid;
