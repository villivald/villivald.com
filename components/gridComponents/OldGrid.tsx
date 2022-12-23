import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/OldGrid.module.css";

const OldGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.proto} />
        <div className={styles.done} />
      </div>
      <div className={styles.gridFooter}>
        <p>
          👵 <FormattedMessage id="old" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default OldGrid;
