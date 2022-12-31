import { useTheme } from "@mui/material/styles";

import { colors } from "../utils/colors";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const theme = useTheme().palette.mode;

  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: theme === "dark" ? colors.dark : colors.green }}
    ></footer>
  );
};

export default Footer;
