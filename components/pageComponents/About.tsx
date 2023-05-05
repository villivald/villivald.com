import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/About.module.css";

const About = () => {
  const { asPath } = useRouter();
  const [currentSlide, setCurrentSlide] = useState("2023");

  const years = ["2023", "2022", "2021", "2020", "2019"];

  useEffect(() => {
    const slide1 = document.getElementById("2023");
    const slide2 = document.getElementById("2022");
    const slide3 = document.getElementById("2021");
    const slide4 = document.getElementById("2020");
    const slide5 = document.getElementById("2019");

    const slides = [slide1, slide2, slide3, slide4, slide5];

    slides.forEach((slide) => {
      // TODO: investigate is there better way to do this than "any"
      slide?.addEventListener("click", (e: any) => {
        setCurrentSlide(e.currentTarget?.id);
      });
    });
  }, [asPath]);

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
            2023
          </div>
          <div
            className={styles.slidesItem}
            id="slide-2"
            data-slide="slide2"
            aria-label="slide 2 of 5"
            tabIndex={0}
          >
            2022
          </div>
          <div
            className={styles.slidesItem}
            id="slide-3"
            data-slide="slide3"
            aria-label="slide 3 of 5"
            tabIndex={0}
          >
            2021
          </div>
          <div
            className={styles.slidesItem}
            id="slide-4"
            data-slide="slide4"
            aria-label="slide 4 of 5"
            tabIndex={0}
          >
            2020
          </div>
          <div
            className={styles.slidesItem}
            id="slide-5"
            data-slide="slide5"
            aria-label="slide 5 of 5"
            tabIndex={0}
          >
            2019
          </div>
        </div>
        <div className={styles.carousel__nav}>
          {years.map((slideLink, index) => (
            <a
              key={index}
              id={slideLink}
              className={styles.sliderNav}
              href={`#slide-${++index}`}
              aria-label={`Go to slide ${++index}`}
              data-slide={currentSlide === slideLink ? "active" : ""}
            >
              {slideLink}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
