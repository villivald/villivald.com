import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { Details } from "./Details";

type Props = {
  theme: string;
  styles: { [key: string]: string };
  intl: { formatMessage: (id: { id: string }) => string };
};

export default function Uni({ styles, theme, intl }: Props) {
  return (
    <div>
      <div>
        <div className={styles.emojiContainer}>
          <h1>
            <FormattedMessage id="studies" />
          </h1>
          <Image
            src="/emojis/workandstudy.svg"
            alt={intl.formatMessage({ id: "alt.workandstudy" })}
            width={36}
            height={36}
          />
        </div>

        <div>
          <div className={styles.emojiContainer}>
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
            <li>
              <FormattedMessage id="russianStudies" />
            </li>

            <li>
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
          <div className={styles.emojiContainer}>
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
            <li>
              <FormattedMessage id="computerScience" />
            </li>

            <li>
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
        <div className={styles.emojiContainer}>
          <h1>
            <FormattedMessage id="courses" />
          </h1>
          <Image
            src="/emojis/writing.svg"
            alt={intl.formatMessage({ id: "alt.penAndPaper" })}
            width={36}
            height={36}
          />
        </div>

        <ul>
          <li>
            <Link
              href="https://frontendmasters.com/u/villivald/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Masters
            </Link>
          </li>

          <li>
            Complete CSS{" "}
            <Link href="./complete_css.pdf" target="_blank">
              (PDF, 35 KB)
            </Link>
          </li>

          <li>
            Road to Next{" "}
            <Link href="./road_to_next.pdf" target="_blank">
              (PDF, 68 KB)
            </Link>
          </li>

          <li>
            <Link
              href="https://www.udemy.com/certificate/UC-5abfefff-c2bc-491a-8d81-8610171f981c/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript | Udemy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
