import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Grid.module.css";

const KoripallopaikatGrid = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering ? (
        <Image
          className={styles.koripallopaikatImage}
          src="/images/caruso.webp"
          width={88}
          height={77}
          alt="logo"
        />
      ) : (
        <div className={styles.koripallopaikatMain}>
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            reiciendis qui laboriosam deleniti consequatur culpa? Quae pariatur
            nostrum, consequatur illum facere consectetur veritatis, placeat
            inventore voluptates, temporibus quisquam nulla nam.
          </p>
        </div>
      )}
    </div>
  );
};

export default KoripallopaikatGrid;
