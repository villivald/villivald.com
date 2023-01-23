import styles from "../../../styles/Studies.module.css";

type DetailsProps = {
  title: string;
  text: string;
  link: string;
};

export const Details = ({ title, text, link }: DetailsProps) => {
  return (
    <div className={styles.toggle}>
      <details>
        <summary>{title}</summary>
        <div>
          <p>{text}</p>
          <a href={link}>Link</a>
        </div>
      </details>
    </div>
  );
};
