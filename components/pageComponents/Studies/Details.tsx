import styles from "../../../styles/Studies.module.css";

type DetailsProps = {
  title: string;
  text: string;
  link: string;
  theme: string;
};

export const Details = ({ title, text, link, theme }: DetailsProps) => {
  return (
    <div className={styles.toggle}>
      <details>
        <summary data-theme={theme}>{title}</summary>
        <div>
          <p data-theme={theme}>{text}</p>
          <a data-theme={theme} href={link}>
            Link
          </a>
        </div>
      </details>
    </div>
  );
};
