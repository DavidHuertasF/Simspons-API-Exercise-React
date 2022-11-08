import { useState, useEffect } from "react";
import simpsonsApi from "../../APIrest/simponsApi";
import Card from "../../components/Home/Card/Card";
import { useParams } from "react-router-dom";
import { darkModeContext } from "../../Context/Context";

import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  query, where
} from "firebase/firestore";

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
    const db = getFirestore();

    // referencia a un doc __________________

    // const gorroRef = doc(db, "items", "APvqzoGodePDciY4VF9H");

    // getDoc(gorroRef).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.data());
    //   }
    // });

    // referencia a una colección __________________


    // const itemsCollectionRef = collection(db, "items");

    // getDocs(itemsCollectionRef).then((snapshot) => {
    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //   });
    // });

    // referencia a una colección con filtro __________________

    const queryItems = query(collection(db, "items"), where("price", ">", 100));
    getDocs(queryItems).then(
      (snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(doc.data());
          });
        });
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
        <darkModeContext.Provider value={false}>
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
        </darkModeContext.Provider>
      </div>
    </div>
  );
}

export default Home;
