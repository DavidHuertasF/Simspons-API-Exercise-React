import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../APIrest/simponsApi";

const Character = () => {
  const { idCharacter } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    setCharacter(getCharacterById(idCharacter));
  }, []);

  return <div>{character.character}</div>;
};

export default Character;
