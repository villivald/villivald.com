import HeadComponent from "../components/pageComponents/Head";
import BlogComponent from "../components/pageComponents/Blog/Blog";

export default function Blog() {
  return (
    <>
      <HeadComponent title="blog" />
      <BlogComponent />
    </>
  );
}
