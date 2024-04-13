import { useContext } from "react";
import { useIntl } from "react-intl";

import HeadComponent from "../components/pageComponents/Head";
import Work from "../components/pageComponents/WorkAndStudy/Work";
import Uni from "../components/pageComponents/WorkAndStudy/Uni";

import { ThemeContext } from "../context";

import styles from "../styles/WorkAndStudy.module.css";

export default function WorkAndStudy() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <>
      <HeadComponent title="workandstudy" />
      <div className={styles.mainContainer} data-theme={theme}>
        <Work styles={styles} theme={theme} intl={intl} />
        <Uni styles={styles} theme={theme} intl={intl} />
      </div>
    </>
  );
}
