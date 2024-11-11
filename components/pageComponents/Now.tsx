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
          height={500}
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
          <time dateTime="2024-11-10">10.11.2024</time>
        </p>
      </section>
      <section>
        <article>
          <h3>
            <FormattedMessage id="doing" />
          </h3>
          <p lang="en">
            Trying to{" "}
            <Link
              href="https://www.strava.com/athletes/42251423"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              cycle
            </Link>{" "}
            at least 150 km per week. Sometimes it works. This week I will try
            to cycle each day as an experiment and see how it goes.
          </p>
          <p lang="en">
            I have finally set up an office room at home and am working on
            making it more ergonomic and functional.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="bookSuggestions" />
          </h3>
          <ul>
            <li lang="en">
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
            <li lang="en">
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
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/Andrei_Lankov"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                Books on North & South Korea
              </Link>{" "}
              by Andrei Lankov
            </li>
          </ul>
        </article>
        <article>
          <h3>
            <FormattedMessage id="watching" />
          </h3>
          <p lang="en">
            Mostly YouTube, NBA - now that the season started a couple of
            days/weeks ago, The Penguin, Loki, Agatha All Along.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="work" />
          </h3>
          <p lang="en">
            Going pretty ok so far at the new job. Looking forward to a better
            work-life balance.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="sideProjects" />
          </h3>
          <p lang="en">
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
          <p lang="en">
            Working on some sort of Strava integration, so it is coming along,
            though not sure what it will look like yet.
          </p>
        </article>
        <article>
          <h3>
            <FormattedMessage id="interestingThings" />
          </h3>
          <p lang="en">
            <Link
              href="https://www.nba.com/cavaliers/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              Cleveland
            </Link>{" "}
            has gone 11-0 so far, and that is something new.
          </p>
        </article>
      </section>
    </div>
  );
}
