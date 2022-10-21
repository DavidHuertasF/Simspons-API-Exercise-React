import "./Card.css";
import {Link} from "react-router-dom";

const Card = ({ id, name, image, quote, category }) => {
  return (
    <div className="card">
      <Link to={`character/${id}`}>
        <img alt={`personaje ${name}`} src={image} />
        <div className="description-container">
          <h3>{name}</h3>
          <p>{`# ${id}`}</p>
          <p>{quote}</p>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
