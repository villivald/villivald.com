import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useTheme } from "@mui/material/styles";

import styles from "../../../styles/grid/SubComponents.module.css";

type Props = {
  emoji: string;
  text: string;
};

const CardFooter = ({ emoji, text }: Props) => {
  const theme = useTheme().palette.mode;

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
          width={24}
          height={24}
        />
        <FormattedMessage id={text} />
      </p>
      <p>↗</p>
    </div>
  );
};

export default CardFooter;
