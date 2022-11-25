import Image from "next/image";

type Props = {
  data: object | undefined;
};

const BlogCardList = ({ data }: Props) => {
  return (
    <div>
      {data &&
        Object.values(data).map((post: any) => (
          <div key={post.id}>
            <a href={post.canonical_url} className="blogPost">
              <Image
                priority
                src={post.cover_image}
                alt={post.title}
                height={200}
                width={400}
              />
              <h3>{post.title}</h3>
            </a>
          </div>
        ))}
    </div>
  );
};

export default BlogCardList;
