import BlogList from "../../blog-list/blog-list";
const Home = (props) => {
  const { data } = props;
  return (
    <>
      <h1>Главная</h1>
      <BlogList data={data} />
    </>
  );
};

export default Home;
