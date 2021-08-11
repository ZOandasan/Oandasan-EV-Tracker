import PokemonInfoCard from '../PokemonInfoCard/PokemonInfoCard'
export default function PokemonTable({ pokeArray, pokemonBank}){
    const pokemonEntry = pokeArray.map((p, idx) => <PokemonInfoCard pokemon={p} key={idx}/>);
    
    const output = (!(pokeArray.length) && !pokemonBank) ? <p>No Pokemon Yet</p> : pokemonEntry;
    
    return output;
} 