import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/grid/SubComponents.module.css";

type Props = {
  emoji: string;
  text: string;
};

const CardFooter = ({ emoji, text }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark" ? styles.gridFooterDark : styles.gridFooterLight
      }
    >
      <p>
        <Image
          src={`/emojis/${emoji}.svg`}
          alt={`emoji icon - ${emoji}`}
          style={{
            filter:
              theme === "dark" && text === "about" ? "invert(1)" : "invert(0)",
          }}
          width={24}
          height={24}
        />
        <FormattedMessage id={text} />
      </p>
      <p>
        <Image
          src="/emojis/arrow.svg"
          style={{
            filter: theme === "dark" ? "invert(1)" : "invert(0)",
          }}
          alt="emoji icon - arrow"
          width={24}
          height={24}
        />
      </p>
    </div>
  );
};

export default CardFooter;
