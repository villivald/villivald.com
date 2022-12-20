import styles from "../../styles/grid/ContactGrid.module.css";

const ContactGrid = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact</h1>
      </div>
      <div className={styles.gridFooter}>
        <p>📞Contact</p>
        <p>↗</p>
      </div>
    </div>
  );
};

export default ContactGrid;
