import { useState, useEffect } from "react";
import simpsonsApi from "./APIrest/simponsApi";
import Card from "./Card";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [characters, setCharacters] = useState([]);

  const getImages = async () => {
    const characters = await simpsonsApi();
    setCharacters(characters);
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
        {characters
          .filter((personaje) => personaje.character.includes(filter))
          .map((character, i) => (
            <Card
              id={i}
              key={i}
              name={character.character}
              image={character.image}
              quote={character.quote}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
