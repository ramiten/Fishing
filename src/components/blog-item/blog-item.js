import blogPhoto from "../images/header/logo.png";
import "./blog-item.css";

const BlogItem = (props) => {
  const { firstName, lastName, header, age } = props;
  return (
    <>
      <div
        className="blog-item"
        onClick={() => {
          console.log("qwe");
        }}
      >
        <div className="blog-img">
          <img alt="photo-blog" src={blogPhoto} />
        </div>
        <div>
          <div>
            <span>{`${firstName} ${lastName}, ${age} лет :`}</span>
          </div>
          <div>
            <h3>{header}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
