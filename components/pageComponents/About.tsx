import styles from "../../styles/About.module.css";

const About = () => {
  const handleEyeMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // get the x and y coordinates of the pointer
    const { clientX, clientY } = e;
    // get the left and top boundaries of the element
    const { left, top } = e.currentTarget.getBoundingClientRect();

    // calculate the x and y coordinates of the pointer relative to the element
    const x = (clientX - left) / 10 - 60;
    const y = (clientY - top) / 30;

    // select the left and right iris elements
    const leftIris = document.querySelector(
      `.${styles.leftIris}`
    ) as HTMLDivElement;

    const rightIris = document.querySelector(
      `.${styles.rightIris}`
    ) as HTMLDivElement;

    // set css variables for the x and y coordinates of the pointer
    leftIris.style.setProperty("--x", `${x}%`);
    leftIris.style.setProperty("--y", `${y}%`);

    rightIris.style.setProperty("--x", `${x}%`);
    rightIris.style.setProperty("--y", `${y}%`);
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
