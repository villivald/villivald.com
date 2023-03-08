import Image from "next/image";
import Link from "next/link";

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
        <p>Work</p>
        <p>Pet projects</p>
      </div>
    </div>
  );
};

export default Projects;
