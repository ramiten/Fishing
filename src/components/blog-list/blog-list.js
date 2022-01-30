import BlogItem from "../blog-item/blog-item";
import "./blog-list.css";

const BlogList = (props) => {
  const { data } = props;
  const blogs = data.map((item) => {
    return <BlogItem {...item} />;
  });
  return <div className="blog-list">{blogs}</div>;
};

export default BlogList;
