import { FormattedMessage } from "react-intl";

import styles from "../../../styles/grid/SubComponents.module.css";

type Props = {
  emoji: string;
  text: string;
};

const CardFooter = ({ emoji, text }: Props) => {
  return (
    <div className={styles.gridFooter}>
      <p>
        {emoji} <FormattedMessage id={text} />
      </p>
      <p>↗</p>
    </div>
  );
};

export default CardFooter;
