import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({character}) => {
    return (
        <div className="col-md-6">
            <Link to={`/Student/StudentDetails/${character.id}`}>
                <div className="card my-2 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default StudentCard; 