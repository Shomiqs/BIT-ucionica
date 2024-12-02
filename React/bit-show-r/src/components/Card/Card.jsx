import "./Card.css";
import { useNavigate } from "react-router";

export const Card = ({ show }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/show/${show.id}`);
      }}
    >
      <img src={show.image.medium} alt="show" />
      <h3>{show.name}</h3>
    </div>
  );
};
