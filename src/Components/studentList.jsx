import React from 'react';
import { Link } from 'react-router-dom';

const studentList = ({ character }) => {
    console.log(character)
return (
        <div className="col-md-6">
            <Link to={`/Students/StudentDetails/${character.id}`}>
                <div className="card my-2 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default studentList;

