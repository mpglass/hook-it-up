import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="card col-12 shadow">
            <h1 className="text-center text-dark display-4">Welcome to my Hary Potter Page</h1>
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/220px-Harry_Potter_wordmark.svg.png" alt="Harry Potter Logo" />
            <p className="card-text row lead justify-content-center">Click the links below to display more information.</p>
            <div className="card-body row justify-content-around align-items-center">
                <Link className="btn btn-outline-dark btn-lg" to="/Staff">Load Staff</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/Characters">Load All Characters</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/Students">Load Students</Link>
            </div>
        </div>
    )
}
export default Home;