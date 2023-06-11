import React, { useState, useEffect, useMemo, useContext } from "react";
import Image from "next/image";

import { ThemeContext } from "../../context";
import styles from "../../styles/About.module.css";

const About = () => {
  const theme = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState("2023");

  const years = useMemo(() => {
    return ["2023", "2022", "2021", "2020", "2019"];
  }, []);

  useEffect(() => {
    const slideCarousel = document.getElementById("slides");

    slideCarousel?.addEventListener("scroll", () => {
      // Get the width of each slide and the current scroll position
      const slideWidth = slideCarousel?.offsetWidth;
      const scrollLeft = slideCarousel?.scrollLeft;

      // Calculate which slide is currently in view
      const currentSlideIndex = Math.round(scrollLeft / slideWidth);

      setCurrentSlide(years[currentSlideIndex]);
    });
  }, [years]);

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
    <div
      className={styles.mainContainer}
      onPointerMove={handleEyeMove}
      data-theme={theme}
    >
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
        <div className={styles.slides} id="slides">
          {years.map((year, index) => (
            <div
              key={index}
              className={styles.slidesItem}
              id={`slide-${++index}`}
              data-slide={`slide${index}`}
              aria-label={`slide ${index} of 5`}
              tabIndex={0}
            >
              <div data-image={`${year}-8`} />
              <div data-image={`${year}-7`} />
              <div data-image={`${year}-6`} />
              <div data-image={`${year}-5`} />
              <div>{year}</div>
              <div data-image={`${year}-4`} />
              <div data-image={`${year}-3`} />
              <div data-image={`${year}-2`} />
              <div data-image={`${year}-1`} />
            </div>
          ))}
        </div>
        <div className={styles.carousel__nav}>
          {years.map((year, index) => (
            <a
              key={index}
              id={year}
              className={styles.sliderNav}
              href={`#slide-${++index}`}
              aria-label={`Go to slide ${index}`}
              data-slide={currentSlide === year ? "active" : ""}
            >
              {year}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
