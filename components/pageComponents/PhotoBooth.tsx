import { useContext, useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/PhotoBooth.module.css";

export default function PhotoBooth() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();
  const [currentSlide, setCurrentSlide] = useState("2025");
  const [clickedImage, setClickedImage] = useState<string | null>(null);

  const years = useMemo(() => {
    return ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];
  }, []);

  useEffect(() => {
    const slideCarousel = document.getElementById("slides");

    const handleScroll = () => {
      // Get the width of each slide and the current scroll position
      const slideWidth = slideCarousel?.offsetWidth ?? 0;
      const scrollLeft = slideCarousel?.scrollLeft ?? 0;

      // Calculate which slide is currently in view
      const currentSlideIndex = Math.round(scrollLeft / slideWidth);

      setCurrentSlide(years[currentSlideIndex] ?? years[0]);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();

      const currentIndex = years.indexOf(currentSlide);
      const delta = e.key === "ArrowRight" ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex + delta, 0),
        years.length - 1,
      );

      const target = document.getElementById(`slide-${nextIndex + 1}`);
      target?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    };

    slideCarousel?.addEventListener("scroll", handleScroll);
    slideCarousel?.addEventListener("keydown", handleKeyDown);

    return () => {
      slideCarousel?.removeEventListener("scroll", handleScroll);
      slideCarousel?.removeEventListener("keydown", handleKeyDown);
    };
  }, [years, currentSlide]);

  // Ensure focus is not left inside an inert (non-current) slide when slide changes
  useEffect(() => {
    const slidesRoot = document.getElementById("slides");
    if (!slidesRoot) return;

    const activeElement = document.activeElement as HTMLElement | null;
    if (!activeElement) return;

    const inertAncestor = activeElement.closest(
      `.${styles.slidesItem}[inert]`,
    ) as HTMLElement | null;

    if (inertAncestor) {
      const currentSlideElement = slidesRoot.querySelector(
        `.${styles.slidesItem}[data-year="${currentSlide}"]`,
      ) as HTMLElement | null;

      const firstTile = currentSlideElement?.querySelector(
        'div[role="button"]',
      ) as HTMLElement | null;

      const yearNav = document.getElementById(
        currentSlide,
      ) as HTMLElement | null;

      (firstTile ?? yearNav)?.focus();
    }
  }, [currentSlide]);

  // Keyboard navigation handled via a DOM listener scoped to focused elements inside the carousel

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
      `.${styles.leftIris}`,
    ) as HTMLDivElement;

    const rightIris = document.querySelector(
      `.${styles.rightIris}`,
    ) as HTMLDivElement;

    // set css variables for the x and y coordinates of the pointer
    leftIris.style.setProperty("--x", `${x}%`);
    leftIris.style.setProperty("--y", `${y}%`);

    rightIris.style.setProperty("--x", `${x}%`);
    rightIris.style.setProperty("--y", `${y}%`);
  };

  const handleImageClick = (imageId: string) => {
    setClickedImage((prev) => (prev === imageId ? null : imageId));
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

      <section className={styles.carousel} aria-label="carousel">
        <div
          className={styles.slides}
          id="slides"
          role="region"
          aria-roledescription="carousel"
          aria-label="Photo years"
        >
          {years.map((year, index) => (
            <div
              key={index}
              className={styles.slidesItem}
              id={`slide-${++index}`}
              data-slide={`slide${index}`}
              data-year={year}
              inert={currentSlide !== year}
              aria-label={`slide ${index} of ${years.length}`}
            >
              {["8", "7", "6", "5"].map((num, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(`${year}-${num}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleImageClick(`${year}-${num}`);
                    }
                  }}
                  data-fullscreen={clickedImage === `${year}-${num}`}
                  style={{
                    backgroundImage: `url(/photobooth/${year}-${num}.avif)`,
                  }}
                  role="button"
                  tabIndex={currentSlide === year ? 0 : -1}
                >
                  {clickedImage === `${year}-${num}` && (
                    <button
                      aria-label={intl.formatMessage({
                        id: "aria.closeFullscreen",
                      })}
                      className={styles.closeButton}
                    ></button>
                  )}
                </div>
              ))}
              <div>{year}</div>
              {["4", "3", "2", "1"].map((num, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(`${year}-${num}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleImageClick(`${year}-${num}`);
                    }
                  }}
                  data-fullscreen={clickedImage === `${year}-${num}`}
                  style={{
                    backgroundImage: `url(/photobooth/${year}-${num}.avif)`,
                  }}
                  role="button"
                  tabIndex={currentSlide === year ? 0 : -1}
                >
                  {clickedImage === `${year}-${num}` && (
                    <button
                      aria-label={intl.formatMessage({
                        id: "aria.closeFullscreen",
                      })}
                      className={styles.closeButton}
                    ></button>
                  )}
                </div>
              ))}
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
}
