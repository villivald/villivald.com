import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import { useContext } from "react";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/grid/SubComponents.module.css";

type Props = {
  emoji: string;
  text: string;
};

export default function CardFooter({ emoji, text }: Props) {
  const theme = useContext(ThemeContext);

  const intl = useIntl();

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
          data-theme={theme === "dark" && text === "about"}
          width={24}
          height={24}
        />
        <FormattedMessage id={text} />
      </p>
      <p>
        <Image
          src="/emojis/arrow.svg"
          data-theme={theme}
          alt={intl.formatMessage({ id: "alt.arrow" })}
          width={24}
          height={24}
        />
      </p>
    </div>
  );
}
