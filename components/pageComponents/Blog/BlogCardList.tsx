import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useTheme } from "@mui/material/styles";

import styles from "../../../styles/Blog.module.css";

type Props = {
  data: object[];
};

const BlogCardList = ({ data }: Props) => {
  const theme = useTheme().palette.mode;

  const formattedData = data && [
    data[0],
    { id: 1 },
    { id: 2 },
    { id: 3 },
    data[1],
    { id: 4 },
    { id: 5 },
    { id: 6 },
    data[2],
  ];

  return (
    <>
      <h1>
        <FormattedMessage id="blogPosts" />
      </h1>
      <div className={styles.blogList}>
        {data &&
          Object.values(formattedData).map((post: any) =>
            post.title ? (
              <div key={post.id} className={styles.blogCard}>
                <a href={post.canonical_url}>
                  <Image
                    priority
                    src={post.cover_image}
                    alt={post.title}
                    height={200}
                    width={400}
                  />
                  <h4
                    className={
                      theme === "dark" ? styles.textDark : styles.textLight
                    }
                  >
                    {post.title}
                  </h4>
                </a>
              </div>
            ) : (
              <div key={post.id} className={styles.animatedCard}>
                <div className={styles.innerCard}>
                  <div className={styles.front}>?</div>
                  <div className={styles.back}></div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default BlogCardList;
