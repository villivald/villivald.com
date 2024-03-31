import { useContext } from "react";
import { useIntl } from "react-intl";

import HeadComponent from "../components/pageComponents/Head";
import Work from "../components/pageComponents/Studies/Work";
import Uni from "../components/pageComponents/Studies/Uni";

import { ThemeContext } from "../context";

import styles from "../styles/Studies.module.css";

export default function Study() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <>
      <HeadComponent title="study" />
      <div className={styles.mainContainer} data-theme={theme}>
        <Work styles={styles} theme={theme} intl={intl} />
        <Uni styles={styles} theme={theme} intl={intl} />
      </div>
    </>
  );
}
