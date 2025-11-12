import Image from "next/image";
import Link from "next/link";
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
          <time dateTime="2025-11-12">12.11.2025</time>
        </p>
      </section>
      <section>
        <article>
          <h2>
            <FormattedMessage id="doing" />
          </h2>
          <p lang="en">
            Trying to{" "}
            <Link href="/cycling" hrefLang="en">
              cycle
            </Link>{" "}
            with a bit more consistency and more{" "}
            <Link
              href="https://www.strava.com/athletes/42251423"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              structured training
            </Link>
            . Doing some stretches on a daily basis for the first time in my
            life.
          </p>
          <p lang="en">
            We did a motorhome trip to France 🇫🇷 this summer. Also briefly
            visited Germany 🇩🇪, Luxembourg 🇱🇺, Belgium 🇧🇪, Switzerland 🇨🇭 and
            Liechtenstein 🇱🇮.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="bookSuggestions" />
          </h2>
          <ul>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/Original_Sin_(Tapper_and_Thompson_book)"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                Original Sin
              </Link>{" "}
              by Jake Tapper & Alex Thompson
            </li>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/Careless_People"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                Careless People
              </Link>{" "}
              by Sarah Wynn-Williams
            </li>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/The_Sleepwalkers:_How_Europe_Went_to_War_in_1914"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                The Sleepwalkers
              </Link>{" "}
              by Christopher Clark
            </li>
          </ul>
        </article>
        <article>
          <h2>
            <FormattedMessage id="watching" />
          </h2>
          <p lang="en">
            YouTube, Only Murders in the Building, All Her Fault, Pluribus.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="work" />
          </h2>
          <p lang="en">Some updates coming soon.</p>
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
            and{" "}
            <Link
              href="https://www.road-to-next.com/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              The Road to Next
            </Link>{" "}
            courses.
          </p>
          <p lang="en">
            My{" "}
            <Link
              href="https://cyclist.fi"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              cycling-related project (cyclist.fi)
            </Link>{" "}
            is finally live. More features are in the works.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="interestingThings" />
          </h2>
          <p lang="en">
            Data roaming prices in Switzerland are just ridiculous for EU
            citizens.
          </p>
        </article>
      </section>
    </div>
  );
}
