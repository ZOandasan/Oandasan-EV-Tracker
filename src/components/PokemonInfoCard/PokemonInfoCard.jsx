import './PokemonBankPokemonCard.css'
import PokemonCardDetail from '../PokemonCardDetail/PokemonCardDetail';
import {useState} from 'react';

export default function PokemonInfoCard({pokemon}){
    const [openDetails, setOpenDetails] = useState(false);

    if (pokemon.nickname){
        return (
            <div className="pokemon-card">
                {openDetails ?
                <>
                    <p>Dex: {pokemon.dexNo}: {pokemon.nickname} | Level: {pokemon.level}</p>
                    <div>  
                        <PokemonCardDetail pokemon={pokemon}/>
                    </div>
                    <button onClick={() => setOpenDetails(false)}>Hide Details</button>
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
                        <PokemonCardDetail pokemon={pokemon}/>
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