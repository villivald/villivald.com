import { useTheme } from "@mui/material/styles";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  const theme = useTheme().palette.mode;

  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: theme === "dark" ? "black" : "#5B5B5B" }}
    ></footer>
  );
};

export default Footer;
