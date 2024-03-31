import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { Details } from "./Details";

type Props = {
  styles: { [key: string]: string };
  theme: string;
  intl: { formatMessage: (id: { id: string }) => string };
};

export default function Work({ styles, theme, intl }: Props) {
  return (
    <div>
      <div>
        <div
          className={
            theme === "dark"
              ? styles.emojiContainerDark
              : styles.emojiContainerLight
          }
        >
          <h1>
            <FormattedMessage id="work" />
          </h1>
          <Image
            src="/emojis/study.svg"
            alt={intl.formatMessage({ id: "alt.student" })}
            width={36}
            height={36}
          />
        </div>

        <div>
          <div
            className={
              theme === "dark"
                ? styles.emojiContainerDark
                : styles.emojiContainerLight
            }
          >
            <Image
              src="/emojis/book.svg"
              alt={intl.formatMessage({ id: "alt.book" })}
              width={24}
              height={24}
            />
            <h2>
              <FormattedMessage id="unihelsinki" /> (2011-2015)
            </h2>
          </div>

          <ul>
            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <FormattedMessage id="russianStudies" />
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <FormattedMessage id="unihelGraduated" />
            </li>
          </ul>

          <Details
            title={intl.formatMessage({ id: "mastersThesis" })}
            text="The perception of Gaito Gazdanov in the press (1926-1939)"
            link="https://helka.helsinki.fi/permalink/358UOH_INST/q5v72t/alma9929028163506253"
            theme={theme}
            description={intl.formatMessage({ id: "library" })}
          />
        </div>

        <div>
          <div
            className={
              theme === "dark"
                ? styles.emojiContainerDark
                : styles.emojiContainerLight
            }
          >
            <Image
              data-theme={theme}
              src="/emojis/floppy.svg"
              alt={intl.formatMessage({ id: "alt.floppy" })}
              width={24}
              height={24}
            />
            <h2>
              <FormattedMessage id="lab" /> (2019 - 2023)
            </h2>
          </div>

          <ul>
            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <FormattedMessage id="computerScience" />
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <FormattedMessage id="labStudies" />
            </li>
          </ul>

          <Details
            title={intl.formatMessage({ id: "transcript" })}
            link="./transcript.pdf"
            theme={theme}
            description="PDF, 0.25 MB"
          />
        </div>
      </div>

      <div>
        <div
          className={
            theme === "dark"
              ? styles.emojiContainerDark
              : styles.emojiContainerLight
          }
        >
          <h1>
            <FormattedMessage id="coursesAndCertificates" />
          </h1>
          <Image
            src="/emojis/writing.svg"
            alt={intl.formatMessage({ id: "alt.penAndPaper" })}
            width={36}
            height={36}
          />
        </div>

        <div>
          <div
            className={
              theme === "dark"
                ? styles.emojiContainerDark
                : styles.emojiContainerLight
            }
          >
            <Image
              data-theme={theme}
              src="/emojis/comet.svg"
              alt={intl.formatMessage({ id: "alt.comet" })}
              width={24}
              height={24}
            />
            <h2>
              <FormattedMessage id="courses" />
            </h2>
          </div>

          <ul>
            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://frontendmasters.com/u/villivald/">
                Frontend Masters
              </Link>
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://www.coursera.org/account/accomplishments/certificate/XXH88UHKWCNW">
                Coursera
              </Link>
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://www.linkedin.com/in/villivald/">
                <FormattedMessage id="other" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div
            className={
              theme === "dark"
                ? styles.emojiContainerDark
                : styles.emojiContainerLight
            }
          >
            <Image
              src="/emojis/fire.svg"
              alt={intl.formatMessage({ id: "alt.fire" })}
              width={24}
              height={24}
            />
            <h2>
              <FormattedMessage id="certificates" />
            </h2>
          </div>

          <ul>
            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://www.udemy.com/certificate/UC-5abfefff-c2bc-491a-8d81-8610171f981c/">
                TypeScript
              </Link>
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://www.freecodecamp.org/villivald">
                freeCodeCamp
              </Link>
            </li>

            <li
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              <Link href="https://www.linkedin.com/in/villivald/">
                <FormattedMessage id="other" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
