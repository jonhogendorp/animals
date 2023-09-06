import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,
    cat, 
    cow, 
    dog,
    gator, 
    horse, 
}


function AnimalShow({type}){
    return <div>
        <img src={svgMap[type]} alt="animal" />
        </div>
}

export default AnimalShow