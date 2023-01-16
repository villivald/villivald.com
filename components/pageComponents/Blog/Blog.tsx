import { useState, useEffect } from "react";

import BlogCardList from "./BlogCardList";
import Spinner from "../../Spinner";
import styles from "../../../styles/Blog.module.css";

const Blog = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://dev.to/api/articles?username=villivald&per_page=3"
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
};

export default Blog;
