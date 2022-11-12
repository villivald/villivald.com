import styles from "../styles/Footer.module.css";

type Props = {
  theme: string;
};

const Footer = ({ theme }: Props) => {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: theme === "dark" ? "black" : "" }}
    ></footer>
  );
};

export default Footer;
