import { useEffect, useState } from "react";

import styles from "../../../styles/Blog.module.css";
import Spinner from "../../Spinner";
import BlogCardList from "./BlogCardList";

interface BlogPost {
  id: number;
  canonical_url: string;
  cover_image: string;
  title: string;
}

export default function Blog() {
  const [data, setData] = useState<BlogPost[]>([]);

  async function fetchData() {
    const res = await fetch(
      "https://dev.to/api/articles?username=villivald&per_page=3",
    );
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {data.length ? <BlogCardList data={data} /> : <Spinner />}
    </div>
  );
}
