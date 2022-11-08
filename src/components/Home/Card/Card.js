import "./Card.css";
import {Link} from "react-router-dom";
import {darkModeContext} from "../../../Context/Context"
import { useContext } from "react";

const Card = ({ id, name, image, quote, category }) => {
  const isDarkMode = useContext(darkModeContext);
  return (  
    <div className="card">
      <Link to={`character/${id}`}>
        <img alt={`personaje ${name}`} src={image} />
        <div className="description-container">
          {isDarkMode + "ss"}
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
