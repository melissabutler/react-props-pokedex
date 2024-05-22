import React from "react";
import Pokecard from "./Pokecard";
const Pokedex = ({ pokemon }) => {

    return (
        <div className="Pokedex">
            <div className="Pokedex-title">Pokedex</div>
            <div className="Pokedex-cards">
            {pokemon.map(i =>(
                <Pokecard id={i.id} name={i.name} type={i.type} exp={i.base_experience} />
            ))}
            </div>
        </div>
        
    );
}

export default Pokedex;