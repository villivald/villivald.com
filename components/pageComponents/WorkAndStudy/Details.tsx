import styles from "../../../styles/WorkAndStudy.module.css";

type DetailsProps = {
  title: string;
  text?: string;
  link: string;
  theme: string;
  description: string;
};

export const Details = ({
  title,
  text,
  link,
  theme,
  description,
}: DetailsProps) => {
  return (
    <div className={styles.toggle}>
      <details>
        <summary data-theme={theme}>{title}</summary>
        <div>
          <p data-theme={theme}>{text}</p>
          <p>
            <a data-theme={theme} href={link} target="_blank" rel="noreferrer">
              {description}
            </a>
          </p>
        </div>
      </details>
    </div>
  );
};
