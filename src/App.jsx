
import './App.css'
import { useState } from "react";
import AnimalShow from './AnimalShow';
import AnimalCarousel from './AnimalCarousel';

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
        <div className='app'>
            <h2>Animals include humans!</h2>
            <button onClick={ handleClick }>Increase amount of animals </button>
            <div className='animal-list'>{renderedAnimals}</div>
            <AnimalCarousel/>
        </div>
        
        
    )
}

export default App;