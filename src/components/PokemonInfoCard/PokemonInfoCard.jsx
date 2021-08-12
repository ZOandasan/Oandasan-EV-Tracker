import './PokemonInfoCard.css'
import PokemonEVDetail from '../PokemonEVDetail/PokemonEVDetail';
import DeletePokemonForm from '../DeletePokemonForm/DeletePokemonForm';
import {useState} from 'react';

export default function PokemonInfoCard({pokemon}){
    const [openDetails, setOpenDetails] = useState(false);
    const [showDelete, setShowDelete] = useState(false);


    if (showDelete){
        return (
        <>
            <DeletePokemonForm setShowForm={setShowDelete}/>
            <button onClick={() => setShowDelete(false)}>Cancel</button>
        </>
        );

    } else if (pokemon.nickname){
        return (
            <div className="pokemon-card">
                {openDetails ?
                <>
                    <p>Dex: {pokemon.dexNo}: {pokemon.nickname} | Level: {pokemon.level}</p>
                    <div>  
                        <PokemonEVDetail pokemon={pokemon}/>
                    </div>
                    <div><button onClick={() => setShowDelete(true)}>Delete Pokemon</button></div>
                    <div><button onClick={() => setOpenDetails(false)}>Hide Details</button></div>
                </>
                : 
                <>
                    <p>Dex: {pokemon.dexNo}: {pokemon.nickname} | Level: {pokemon.level}</p>
                    <button onClick={() => setOpenDetails(true)}>Show Details</button>
                </>
                }
            </div>
        );
    } else {
        return (
            <div className="pokemon-card">
                {openDetails ?
                <>
                    <p>Dex: {pokemon.dexNo}: Pokemon Species | Level: {pokemon.level}</p>
                    <div>  
                        <PokemonEVDetail pokemon={pokemon}/>
                    </div>
                    <button onClick={() => setOpenDetails(false)}>Hide Details</button>
                </>
                : 
                <>
                    <p>Dex: {pokemon.dexNo}: Pokemon Species | Level: {pokemon.level}</p>
                    <button onClick={() => setOpenDetails(true)}>Show Details</button>
                </>
                }
            </div>
        );
    }
} 