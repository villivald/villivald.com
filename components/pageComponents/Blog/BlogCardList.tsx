import Image from "next/image";
import { useContext, useEffect, useState } from "react";
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

interface PostObject {
  id: number;
  title?: string;
  canonical_url?: string;
  cover_image?: string;
}

export default function BlogCardList({ data }: DataArray) {
  const [randomPosts, setRandomPosts] = useState<DataObject[]>([]);
  const [loadRandomPost, setLoadRandomPost] = useState(false);

  const theme = useContext(ThemeContext);

  async function fetchRandomPost() {
    const res = await fetch("https://dev.to/api/articles?username=villivald");
    const json: DataObject[] = await res.json();
    const randomPostData = json.slice(3, -1);

    const shuffledPosts = [...randomPostData];

    for (let i = shuffledPosts.length - 1; i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledPosts[i], shuffledPosts[randomIndex]] = [
        shuffledPosts[randomIndex],
        shuffledPosts[i],
      ];
    }

    setRandomPosts(shuffledPosts.slice(0, 6));
  }

  useEffect(() => {
    if (loadRandomPost) fetchRandomPost();
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

  return (
    <>
      <h1 className={theme === "dark" ? styles.textDark : styles.textLight}>
        <FormattedMessage id="blogPosts" />
      </h1>
      <div className={styles.blogList}>
        {Object.values(formattedData).map((post: PostObject) =>
          post.title ? (
            <div key={post.id} className={styles.blogCard} data-theme={theme}>
              <a href={post.canonical_url} hrefLang="en">
                <Image
                  priority
                  src={
                    post.cover_image || "https://via.placeholder.com/400x200"
                  }
                  alt="" // set alt to empty string to avoid screen readers spell the image related text twice
                  height={200}
                  width={400}
                />
                <h2>{post.title}</h2>
              </a>
            </div>
          ) : (
            <a
              key={post.id}
              className={styles.animatedCard}
              data-theme={theme}
              href={
                randomPosts[post.id - 1]?.canonical_url ??
                "https://dev.to/villivald"
              }
              hrefLang="en"
              onMouseEnter={() => setLoadRandomPost(true)}
              onTouchStart={() => setLoadRandomPost(true)}
              onFocus={() => setLoadRandomPost(true)}
            >
              <div className={styles.innerCard}>
                <div className={styles.front}>?</div>
                <div
                  key={randomPosts[post.id - 1]?.id}
                  className={[styles.blogCard, styles.back].join(" ")}
                >
                  <div className={styles.backContent}>
                    <Image
                      className={styles.backImage}
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
                  </div>
                </div>
              </div>
            </a>
          ),
        )}
      </div>
    </>
  );
}
