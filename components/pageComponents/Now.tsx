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
        <p>
          <FormattedMessage id="latestRandomPhoto" />
        </p>
        <Image
          src="/images/now.avif"
          alt="Random photo"
          width={375}
          height={280}
        />
        <p>
          <FormattedMessage id="inspiredBy" />
          <Link
            href="https://nownownow.com"
            target="_blank"
            rel="noopener noreferrer"
            hrefLang="en"
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
          <time dateTime="2024-08-06">06.08.2024</time>
        </p>
      </section>
      <section>
        <article>
          <h3>
            <FormattedMessage id="doing" />
          </h3>
          <p>
            Trying to{" "}
            <Link
              href="https://www.strava.com/athletes/42251423"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              cycle
            </Link>{" "}
            at least 150km per week.
          </p>
          <p>Planning a move to a new place.</p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="bookSuggestions" />
          </h3>
          <ul>
            <li>
              <Link
                href="https://prestelpublishing.penguinrandomhouse.de/book/Leonardo-Frida-and-the-Others/Camille-Jouneaux/Prestel-com/e621930.rhd"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
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
                hrefLang="en"
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
                hrefLang="en"
              >
                The Big Book of Perfume
              </Link>{" "}
              by Jeanne Doré
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <FormattedMessage id="watching" />
          </h3>
          <p>
            Mostly YouTube, Tour de France, and other races coming up this
            summer.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="work" />
          </h3>
          <p>
            Started a new job a couple of months ago. Going pretty ok so far.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="sideProjects" />
          </h3>
          <p>
            My{" "}
            <Link
              href="https://github.com/villivald/cyclist.fi"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              cycling-related project
            </Link>{" "}
            remains in somewhat limbo at the moment. New ideas come and go, but
            nothing concrete yet.
          </p>
          <p>
            Probably, after completing this page, I will start working on a new
            one - the personal collection of nice-looking websites.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="interestingThings" />
          </h3>
          <p>
            The fact that the{" "}
            <Link
              href="https://www.letourfemmes.fr/en"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              Tour de France Femmes
            </Link>{" "}
            does not have an app, that is available for the male version, let
            alone the Netflix series 🤷‍♂️.
          </p>
        </article>
      </section>
    </div>
  );
}
