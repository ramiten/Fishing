const BlogItemMainContext = React.createContext();

const Provider = () => {
  const some = "some text ";
  const value = {
    some,
  };
  return (
    <BlogItemMainContext.Provider value={value}>
      {children}
    </BlogItemMainContext.Provider>
  );
};

export { Provider, BlogItemMainContext };
