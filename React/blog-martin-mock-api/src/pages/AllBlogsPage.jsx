import { Blog } from "../components/Blog";

export const AllBlogsPage = ({ blogs, setSingleBlog, setRefresh }) => {
  return (
    <main>
      {blogs.map((blog) => {
        return (
          <Blog
            key={crypto.randomUUID()}
            blog={blog}
            setSingleBlog={setSingleBlog}
            setRefresh={setRefresh}
          />
        );
      })}
    </main>
  );
};
