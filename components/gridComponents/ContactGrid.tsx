import CardFooter from "./subComponents/CardFooter";
import styles from "../../styles/grid/ContactGrid.module.css";

const ContactGrid = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <CardFooter emoji="phone" text="contact" />
    </div>
  );
};

export default ContactGrid;
