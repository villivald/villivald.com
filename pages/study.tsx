import HeadComponent from "../components/pageComponents/Head";
import StudiesComponent from "../components/pageComponents/Studies/Studies.mdx";

import styles from "../styles/Studies.module.css";

export default function Study() {
  return (
    <>
      <HeadComponent title="study" />
      <div className={styles.mainContainer}>
        <StudiesComponent />
      </div>
    </>
  );
}
