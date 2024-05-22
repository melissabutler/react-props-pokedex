import React from "react";
import "./Pokecard.css"

let pokeURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = ({id, name, type, exp}) => {
    let imgUrl = pokeURL + `${id}.png`;
    console.log(imgUrl)
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img className="Pokecard-img" src={imgUrl}></img>
            <h4 className="Pokecard-detail">Type: {type}</h4>
            <h4 className="Pokecard-detail">Exp: {exp}</h4>

        </div>
    );
}

export default Pokecard;