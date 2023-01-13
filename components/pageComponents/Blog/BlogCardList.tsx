import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import styles from "../../../styles/Blog.module.css";

type Props = {
  data: object | undefined;
};

const BlogCardList = ({ data }: Props) => {
  const theme = useTheme().palette.mode;

  return (
    <div>
      {data &&
        Object.values(data).map((post: any) => (
          <div key={post.id}>
            <a href={post.canonical_url}>
              <Image
                priority
                src={post.cover_image}
                alt={post.title}
                height={200}
                width={400}
              />
              <h3
                className={
                  theme === "dark" ? styles.textDark : styles.textLight
                }
              >
                {post.title}
              </h3>
            </a>
          </div>
        ))}
    </div>
  );
};

export default BlogCardList;
