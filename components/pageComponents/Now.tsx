import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Now.module.css";

export default function Now() {
  const intl = useIntl();
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.mainContainer} data-theme={theme}>
      <section>
        <p>Latest random photo</p>
        <Image
          src="/images/now.avif"
          alt="Random photo"
          width={375}
          height={280}
        />
        <p>
          Inspired by{" "}
          <Link
            href="https://nownownow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nownownow.com
          </Link>
        </p>
        <p data-theme={theme}>
          <Image
            src="/emojis/calendar.svg"
            alt={intl.formatMessage({ id: "alt.calendar" })}
            width={32}
            height={32}
          />
          <FormattedMessage id="lastUpdated" />
          <time dateTime="2024-07-25">25.07.2024</time>
        </p>
      </section>
      <section>
        <article>
          <h3>Doing</h3>
          <p>
            Trying to{" "}
            <Link
              href="https://www.strava.com/athletes/42251423"
              target="_blank"
              rel="noopener noreferrer"
            >
              cycle
            </Link>{" "}
            at least 150km per week.
          </p>
          <p>Planning a move to a new place.</p>
        </article>
        <article>
          <h3>Last book suggestions</h3>
          <ul>
            <li>
              <Link
                href="https://prestelpublishing.penguinrandomhouse.de/book/Leonardo-Frida-and-the-Others/Camille-Jouneaux/Prestel-com/e621930.rhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leonardo, Frida and the Others
              </Link>{" "}
              by Camille Jouneaux
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Design of Everyday Things
              </Link>{" "}
              by Donald Norman
            </li>
            <li>
              <Link
                href="https://www.nez-editions.us/products/the-big-book-of-perfume?variant=32638976491574"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Big Book of Perfume
              </Link>{" "}
              by Jeanne Doré
            </li>
          </ul>
        </article>
        <article>
          <h3>Currently watching</h3>
          <p>
            Mostly youtube, Tour de France and other races coming up this
            summer.
          </p>
        </article>
        <article>
          <h3>Work</h3>
          <p>
            Started a new job a couple of months ago. Going pretty ok so far.
          </p>
        </article>
        <article>
          <h3>Side projects</h3>
          <p></p>
        </article>
        <article>
          <h3>Interesting things</h3>
          <p></p>
        </article>
      </section>
    </div>
  );
}
