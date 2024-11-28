import { useParams } from "react-router-dom";

export const SingleBlogPage = ({ blogs }) => {
  const { id } = useParams();

  const blog = blogs.find((blog) => {
    return blog.id === id;
  });

  if (!blog) return <></>;

  return (
    <div className="single-page">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.image} />
      <p>{blog.description}</p>
      <span>{blog.author}</span>
    </div>
  );
};
