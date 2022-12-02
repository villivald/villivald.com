import Image from "next/image";
import styles from "../../styles/grid/KorippallopaikatGrid.module.css";

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
      <div className={styles.overlay}>
        <div>
          <h1>Koripallopaikat</h1>
        </div>
        <div className={styles.gridFooter}>
          <p>🏀Koripallo</p>
          <p>↗</p>
        </div>
      </div>
    </div>
  );
};

export default KoripallopaikatGrid;
