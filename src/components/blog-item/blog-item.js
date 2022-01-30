import blogPhoto from "../images/header/logo.png";

const BlogItem = () => {
  return (
    <>
      <div className="BlogItem">
        <div className="blog-img">
          <img alt="photo-blog" src={blogPhoto} />
        </div>
        <div>
          <div>
            <span>{`${firstName} ${lastName}`}</span>
          </div>
          <div>
            <h3>Заголовок</h3>
            <p>Моя история....</p>
          </div>
        </div>
      </div>
    </>
  );
};
