import simpsonsApi from "./APIrest/simponsApi";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="principal_container">
      <h1>Characters</h1>
      <div className='cards-container'>
        {simpsonsApi.map((character, i) => (
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
