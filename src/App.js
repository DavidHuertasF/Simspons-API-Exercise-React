import {useState} from "react"
import simpsonsApi from "./APIrest/simponsApi";
import Card from "./Card";
import "./App.css";

function App() {

  const [filter, setFilter] = useState("");

  return (
    <div className="principal_container">
      <h1>Characters</h1>
      <input id="filter" name="filter" type="text" value={filter}
        onChange={(event)=> setFilter(event.target.value)}
      />
      <div className='cards-container'>
        {simpsonsApi.filter(personaje => personaje.character.includes(filter)).map((character, i) => (
          <Card
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
