import HeadComponent from "../components/pageComponents/Head";
import BooksComponent from "../components/pageComponents/Books/Books";

export default function Books() {
  return (
    <>
      <HeadComponent title="books" />
      <BooksComponent />
    </>
  );
}
