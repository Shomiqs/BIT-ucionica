import { URL } from "../App";
import { useNavigate } from "react-router-dom";

export const Blog = ({ blog, setRefresh }) => {
  const navigate = useNavigate();
  const { author, description, image, title, id } = blog;

  const shortenDescription = (description, end) => {
    let modifiedString = "";

    modifiedString = description.substring(0, end);
    return modifiedString;
  };

  const deleteBlogById = (id) => {
    fetch(URL + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return new Error("Something went wrong!");
      })
      .then(() => setRefresh((prevValue) => !prevValue));
  };

  return (
    <div className="blog">
      <article onClick={() => navigate(`/blog/${id}`)}>
        <h2>{title}</h2>
        <p>{shortenDescription(description, 10)}</p>
        <p>Author: {author}</p>
        <img src={image} alt={title} />
      </article>
      <button onClick={() => deleteBlogById(id)}>DELETE</button>
    </div>
  );
};
