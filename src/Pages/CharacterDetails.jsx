import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import template from '../Components/template';

const CharacterDetails = () => {
    const { characterid } = useParams();
    const [character, setCharater] = useState({});

    useEffect(() => {
        fetch(``)
        .then((res) => res.json())
        .then((character) => setCharater());
    }, [characterid]);

    return (
        <template>
            
        </template>
    )
}


    



export default CharacterDetails; 
