import "./Card.css";

export const Card = ({ show }) => {
  return (
    <div className="card">
      <img src={show.image.medium} alt="show" />
      <h3>{show.name}</h3>
    </div>
  );
};
