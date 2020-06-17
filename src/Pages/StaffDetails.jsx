import React from "react";
import { useParams } from "react-router-dom";
import Template from "../Components/template";

const StaffDetails = () => {
  const { characterName } = useParams();

  const [character, setCharacter] = React.useState({});

  React.useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/staff/${characterName}`)
      .then((res) => res.json())
      .then((character) => setCharacter(character));
  }, [characterName]);

  return (
    <Template>
      <div className="col-12">
        <div className="d-flex justify-content-around">
          <img src={character.image} alt="Charcter" />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>{character.name}</h1>
            <h4>Species: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default StaffDetails; 