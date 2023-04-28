import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <p>
          <Image
            src="/emojis/github_light.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Link href="https://github.com/villivald">villivald</Link>
        </p>
        <Image
          src="http://ghchart.rshah.org/30a14e/villivald"
          alt="villivald's Github chart"
          width={663}
          height={104}
        />
      </div>
      <div></div>
      <div></div>
      <div>
        <span>
          <h1>
            <FormattedMessage id="work" />
          </h1>
          <p>Some projects</p>
        </span>
        <span>
          <h1>
            <FormattedMessage id="petProjects" />
          </h1>
          <p>Some projects</p>
        </span>
      </div>
    </div>
  );
};

export default Projects;
