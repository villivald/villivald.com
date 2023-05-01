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

      <section className={styles.carousel} aria-label="carousel" tabIndex={0}>
        <div className={styles.slides}>
          <div
            className={styles.slidesItem}
            id="slide-1"
            data-slide="slide1"
            aria-label="slide 1 of 5"
            tabIndex={0}
          >
            1
          </div>
          <div
            className={styles.slidesItem}
            id="slide-2"
            data-slide="slide2"
            aria-label="slide 2 of 5"
            tabIndex={0}
          >
            2
          </div>
          <div
            className={styles.slidesItem}
            id="slide-3"
            data-slide="slide3"
            aria-label="slide 3 of 5"
            tabIndex={0}
          >
            3
          </div>
          <div
            className={styles.slidesItem}
            id="slide-4"
            data-slide="slide4"
            aria-label="slide 4 of 5"
            tabIndex={0}
          >
            4
          </div>
          <div
            className={styles.slidesItem}
            id="slide-5"
            data-slide="slide5"
            aria-label="slide 5 of 5"
            tabIndex={0}
          >
            5
          </div>
        </div>
        <div className={styles.carousel__nav}>
          <a
            className={styles.sliderNav}
            href="#slide-1"
            aria-label="Go to slide 1"
          >
            1
          </a>
          <a
            className={styles.sliderNav}
            href="#slide-2"
            aria-label="Go to slide 2"
          >
            2
          </a>
          <a
            className={styles.sliderNav}
            href="#slide-3"
            aria-label="Go to slide 3"
          >
            3
          </a>
          <a
            className={styles.sliderNav}
            href="#slide-4"
            aria-label="Go to slide 4"
          >
            4
          </a>
          <a
            className={styles.sliderNav}
            href="#slide-5"
            aria-label="Go to slide 5"
          >
            5
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
