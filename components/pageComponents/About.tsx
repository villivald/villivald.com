import styles from "../../styles/About.module.css";

const About = () => {
  const handleEyeMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const leftPupil = document.querySelector(
      `.${styles.leftPupil}`
    ) as HTMLDivElement;

    const rightPupil = document.querySelector(
      `.${styles.rightPupil}`
    ) as HTMLDivElement;

    leftPupil.style.transform = `translate(-50%, -50%) translate(${x / 30}px, ${
      y / 30
    }px)`;
    rightPupil.style.transform = `translate(-50%, -50%) translate(${
      x / 30
    }px, ${y / 30}px)`;
  };

  return (
    <div className={styles.mainContainer} onPointerMove={handleEyeMove}>
      <div className={styles.eyes}>
        <div className={styles.leftEye}>
          <div className={styles.leftIris}>
            <div className={styles.leftPupil}></div>
          </div>
        </div>

        <div className={styles.rightEye}>
          <div className={styles.rightIris}>
            <div className={styles.rightPupil}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
