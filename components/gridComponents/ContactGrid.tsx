import { FormattedMessage } from "react-intl";

import styles from "../../styles/grid/ContactGrid.module.css";

const ContactGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          <FormattedMessage id="contact" />
        </h1>
      </div>
      <div className={styles.gridFooter}>
        <p>
          📞 <FormattedMessage id="contact" />
        </p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default ContactGrid;
