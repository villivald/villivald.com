import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Blog.module.css";

interface DataObject {
  id: number;
  canonical_url: string;
  cover_image: string;
  title: string;
}

interface DataArray {
  data: DataObject[];
}

export default function BlogCardList({ data }: DataArray) {
  const [randomPostData, setRandomPostData] = useState([]);
  const [loadRandomPost, setLoadRandomPost] = useState(false);

  const theme = useContext(ThemeContext);

  async function fetchRandomPost() {
    const res = await fetch("https://dev.to/api/articles?username=villivald");
    const json = await res.json();
    setRandomPostData(json.slice(3, -1));
  }

  useEffect(() => {
    loadRandomPost && fetchRandomPost();
  }, [loadRandomPost]);

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

  // get 6 random posts from the randomPost array
  const randomPosts: DataObject[] = [...randomPostData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <>
      <h1 className={theme === "dark" ? styles.textDark : styles.textLight}>
        <FormattedMessage id="blogPosts" />
      </h1>
      <div className={styles.blogList}>
        {Object.values(formattedData).map((post: any) =>
          post.title ? (
            <div key={post.id} className={styles.blogCard} data-theme={theme}>
              <a href={post.canonical_url}>
                <Image
                  priority
                  src={post.cover_image}
                  alt="" // set alt to empty string to avoid screen readers spell the image related text twice
                  height={200}
                  width={400}
                />
                <h2>{post.title}</h2>
              </a>
            </div>
          ) : (
            <div
              key={post.id}
              className={styles.animatedCard}
              data-theme={theme}
              onMouseEnter={() => setLoadRandomPost(true)}
              onTouchStart={() => setLoadRandomPost(true)}
              onFocus={() => setLoadRandomPost(true)}
              tabIndex={0}
            >
              <div className={styles.innerCard}>
                <div className={styles.front}>?</div>
                <div
                  key={randomPosts[post.id - 1]?.id}
                  className={[styles.blogCard, styles.back].join(" ")}
                >
                  <a href={randomPosts[post.id - 1]?.canonical_url}>
                    <Image
                      priority
                      src={
                        randomPosts[post.id - 1]?.cover_image ||
                        "https://via.placeholder.com/400x200"
                      }
                      alt="" // set alt to empty string to avoid screen readers spell the image related text twice
                      height={200}
                      width={400}
                    />
                    <h2>{randomPosts[post.id - 1]?.title}</h2>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
