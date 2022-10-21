import { useState, useEffect } from "react";
import simpsonsApi from "../../APIrest/simponsApi";
import Card from "../../components/Home/Card/Card";
import { useParams } from "react-router-dom";

import "./Home.css";

function Home() {
  const [filter, setFilter] = useState("");
  const [characters, setCharacters] = useState([]);
  const { cat } = useParams();

  const getImages = () => {
    setTimeout(() => {
      const characters = simpsonsApi;
      setCharacters(characters);
    }, 3000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">
      <h1>Characters</h1>
      <input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="cards-container">
        {cat
          ? characters
              .filter((personaje) => personaje.character.includes(filter))
              .filter((personaje) => personaje.category === cat)
              .map((character, i) => (
                <Card
                  id={i}
                  key={i}
                  name={character.character}
                  image={character.image}
                  quote={character.quote}
                  category={character.category}
                />
              ))
          : characters
              .filter((personaje) => personaje.character.includes(filter))
              .map((character, i) => (
                <Card
                  id={i}
                  key={i}
                  name={character.character}
                  image={character.image}
                  quote={character.quote}
                  category={character.category}
                />
              ))}
      </div>
    </div>
  );
}

export default Home;
