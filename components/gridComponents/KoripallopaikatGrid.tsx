import Image from "next/image";
import { FormattedMessage } from "react-intl";

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
          <Image
            fill
            src="/images/koripallopaikat.svg"
            alt="Koripallopaikat"
            className={styles.logo}
          />
        </div>
        <div className={styles.gridFooter}>
          <p>
            🏀 <FormattedMessage id="koripallopaikat" />
          </p>
          <p>↗</p>
        </div>
      </div>
    </div>
  );
};

export default KoripallopaikatGrid;
