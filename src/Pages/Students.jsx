import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../Components/template';

const Characters = () => {
    const [characters, setCharacter] = useState([]);
    useEffect(() => {
        fetch(`http://hp-api.herokuapp.com/api/characters/students`)
        .then((res) => res.json())
        .then((character) => setCharacter(character));
    }, []);

    return (
        <Template>
            <div className="col-12">
                <h1 className="col-12 text-center">Students</h1>
                <div className="d-flex justify-content-between">
                    <ul className="list-group list-group-flush">
                        {characters.map(character => (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {character.name}
                                <Link className="btn btn-link" to={`/character/${character.id}`}>Details</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Template>
    )
}
export default Characters;
