const BlogListMainContext = React.createContext();

const Provider = () => {
  const some = "some text ";
  const value = {
    some,
  };
  return (
    <BlogListMainContext.Provider value={value}>
      {children}
    </BlogListMainContext.Provider>
  );
};

export { Provider, BlogListMainContext };
