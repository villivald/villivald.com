import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import { colors } from "../utils/colors";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const theme = useTheme().palette.mode;

  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: theme === "dark" ? colors.dark : colors.green }}
    >
      <div>
        <div></div>
      </div>
      <div>
        <Image src="/emojis/gitlab.svg" alt="logo" width={64} height={64} />
        <Image src="/emojis/github.svg" alt="logo" width={64} height={64} />
        <Image src="/emojis/linkedin.svg" alt="logo" width={64} height={64} />
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <Image src="/emojis/basketball.svg" alt="logo" width={64} height={64} />
        <Image src="/emojis/email.svg" alt="logo" width={64} height={64} />
        <Image src="/emojis/pen.svg" alt="logo" width={64} height={64} />
      </div>
      <div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
