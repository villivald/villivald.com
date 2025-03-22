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
          <time dateTime="2025-03-22">22.03.2025</time>
        </p>
      </section>
      <section>
        <article>
          <h2>
            <FormattedMessage id="doing" />
          </h2>
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
            with a bit more consistency and more structured training. Doing some
            stretches on a daily basis for the first time in my life.
          </p>
          <p lang="en">
            Planning a motorhome trip to France in the summer with my wife as a
            reincarnation of our previous intrerail trips.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="bookSuggestions" />
          </h2>
          <ul>
            <li lang="en">
              <Link
                href="https://www.penguin.co.uk/books/438663/the-rodchenkov-affair-by-grigory-rodchenkov/9780753553350"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                The Rodchenkov Affair
              </Link>{" "}
              by Grigory Rodchenkov
            </li>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/War_(Woodward_book)"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                War
              </Link>{" "}
              by Bob Woodward
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
          <h2>
            <FormattedMessage id="watching" />
          </h2>
          <p lang="en">
            Mostly YouTube, Severance, and White Lotus. The Room Next Door and
            Queen of Fucking Everything were nice too.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="work" />
          </h2>
          <p lang="en">
            Going pretty ok so far at the new job. Looking forward to a better
            work-life balance. Gaining more experience in the field, as well as
            going out of my comfort zone.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="sideProjects" />
          </h2>
          <p lang="en">
            I am starting to think about another rebuild of my personal website
            as I am going through the{" "}
            <Link
              href="https://piccalil.li/complete-css/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              Complete CSS
            </Link>{" "}
            course.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="interestingThings" />
          </h2>
          <p lang="en">
            <Link
              href="https://www.nba.com/cavaliers/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              Cleveland
            </Link>{" "}
            has gone 11-0 so far, and it is something new. <br />
            Upd. 22.01.25 - 33-6 💪 <br />
            Upd. 22.03.25 - 56-14 🚀
          </p>
        </article>
      </section>
    </div>
  );
}
