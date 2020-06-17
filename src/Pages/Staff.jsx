import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Template from "../Components/template";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/staff`)
      .then((res) => res.json())
      .then((characters) => setCharacters(characters));
  }, []);

  return (
    <Template>
      <div className="col-12">
        <h1 className="col-12 text-center">Hogwarts Staff</h1>
        <div className="d-flex justify-content-between">
          <ul className="list-group list-group-flush">
            {characters.map((character) => (
              <li
                key={character.name}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {character.name}
                <Link
                  className="btn btn-link"
                  to={`/characters/${character.name}`}
                >
                  Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Template>
  );
};
export default Characters;
