import Image from "next/image";
import styles from "../../styles/Old.module.css";

const sites = [
  {
    title: "First version of my website from early 2019",
    image: "/images/website1.webp",
    alt: "Screenshot of the first version of my website from 2019",
    description: ["html", "skeleton css"],
  },
  {
    title: "The second iteration published in late 2019",
    image: "/images/website2.webp",
    alt: "Screenshot of the second iteration of my website from late 2019",
    description: ["css", "javascript", "bootstrap", "html"],
  },
  {
    title: "React version that was live from 2020 to 2023",
    image: "/images/website3.webp",
    alt: "Screenshot of the third iteration of my website which was live in from 2020 to 2023",
    description: ["javascript", "css", "html", "react"],
  },
];

const Old = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {sites.map((site) => (
          <div className={styles.card} key={site.title}>
            <div>
              <p>{site.title}</p>
              <Image src={site.image} width={300} height={300} alt={site.alt} />
              <p>
                {site.description.map((desc) => (
                  <span key={desc}>{desc}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Old;
