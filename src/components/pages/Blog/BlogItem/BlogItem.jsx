import { useContext } from "react";
import { Provider, BlogItemMainContext } from "./provider/main";

const BlogItem = (props) => {
  return <Provider></Provider>;
};

const mainCtx = useContext(BlogItemMainContext);
