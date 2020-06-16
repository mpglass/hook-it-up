import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const characterList = ({ character }) => {
console.log(character.id)
const [character, setCharacter] = useState(''); 
return (
        <div className="col-md-6">
            <Link to={`/Characters/CharacterDetails/${character.id}`}>
                <div className="card my-2 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default characterList;

