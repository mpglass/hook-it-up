import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({character}) => {
    return (
        <div className="col-md-6">
            <Link to={`/characters/characterdetails/${character.id}`}>
                <div className="card my-2 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CharacterCard; 

import React from 'react'
class CharacterCard extends React.Component {


    render() {
        return (
            <section>
                <div className="col-md-8">
                    <div className="card my-2 shadow">
                        <div className="card-body">
                            <p className="card-text">Name: {this.props.character.name}</p>
                            <p className="card-text">Age: {this.props.character.age}</p>
                            <p className="card-text">Eye Color: {this.props.character.eye_color}</p>
                            <p className="card-text">Hair Color: {this.props.character.hair_color}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CharacterCard