import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Grid.module.css";

const KoripallopaikatGrid = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/caruso.webp"
        width={100}
        height={100}
        alt="Avatar"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div>
          <h1>Koripallopaikat</h1>
        </div>
      </div>
    </div>
  );
};

export default KoripallopaikatGrid;
