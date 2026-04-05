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
          <time dateTime="2026-04-05">05.04.2026</time>
        </p>
      </section>
      <section>
        <article>
          <h2>
            <FormattedMessage id="doing" />
          </h2>
          <p lang="en">
            Not much going on lately, honestly. I have been busy with work and
            kind of sick for most of early spring.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="bookSuggestions" />
          </h2>
          <ul>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/This_Is_for_Everyone"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                This Is for Everyone
              </Link>{" "}
              by Tim Berners-Lee
            </li>
            <li lang="en">
              <Link
                href="https://en.wikipedia.org/wiki/Nuclear_War:_A_Scenario"
                target="_blank"
                rel="noopener noreferrer"
                hrefLang="en"
              >
                Nuclear War
              </Link>{" "}
              by Annie Jacobsen
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
          </ul>
        </article>
        <article>
          <h2>
            <FormattedMessage id="watching" />
          </h2>
          <p lang="en">
            YouTube, road cycling, The Pitt, Jury Duty, and also rewatching Twin
            Peaks (it is happening again ➰).
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="work" />
          </h2>
          <p lang="en">
            I started as an Application Coordinator at a local health tech
            company late last year. There is a huge amount to learn, but it is a
            great opportunity.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="sideProjects" />
          </h2>
          <p lang="en">
            At the moment, I am actively working on my cycling-related project -{" "}
            <Link
              href="https://cyclist.fi"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              CYCLIST.FI
            </Link>
            {". "}
            Several new features are coming soon.
          </p>
          <p lang="en">
            I have also started thinking about updating/rebuilding this website,
            but I am not sure when I will find the time.
          </p>
        </article>
        <article>
          <h2>
            <FormattedMessage id="interestingThings" />
          </h2>
          <p lang="en">
            The job market in Finland seems to be the worst it is been in a
            while.
          </p>
        </article>
      </section>
    </div>
  );
}
