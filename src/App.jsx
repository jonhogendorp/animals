import { useState } from "react";
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse' ];

    return animals[Math.floor(Math.random() *  animals.length)]
}

function App(){
    const [animals, setAnimals] =  useState([]);

    const handleClick = () => {
       setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return(
        <div>
            <h2>Animals include humans!</h2>
            <button onClick={ handleClick }>Increase amlount of animals </button>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default App;