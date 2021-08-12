import PokemonInfoCard from '../PokemonInfoCard/PokemonInfoCard'
export default function PokemonTable({ pokeArray, pokemonBank, saveId, setSavedPokemon}){
    const pokemonEntry = pokeArray.map((p, idx) => <PokemonInfoCard saveId={saveId} pokemon={p} key={idx} setSavedPokemon={setSavedPokemon}/>);
    
    const output = (!(pokeArray.length) && !pokemonBank) ? <p>No Pokemon Yet</p> : pokemonEntry;
    
    return output;
} 