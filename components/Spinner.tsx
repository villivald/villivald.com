import styled from "@emotion/styled";

import { colors } from "../utils/colors";
import styles from "../styles/Spinner.module.css";

type animationDelayProps = {
  delay: string;
};

const Spinner = () => {
  const Ball = styled.div`
    background-color: ${colors.dark80};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    animation: ${styles.moveRight} 2s both cubic-bezier(0.5, 0.1, 0.5, 1)
      infinite;
    animation-delay: ${(props: animationDelayProps) => props.delay};
  `;

  return (
    <div className={styles.balls}>
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          {[...Array(5)].map((_, i) => (
            <Ball key={i} delay={`${i * 0.1}s`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Spinner;
