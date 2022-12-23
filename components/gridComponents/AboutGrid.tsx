import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/AboutGrid.module.css";

const AboutGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about} />
      <div className={styles.cat} />
      <div className={styles.gridFooter}>
        <p>
          🚴‍♂️ <FormattedMessage id="about" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default AboutGrid;
