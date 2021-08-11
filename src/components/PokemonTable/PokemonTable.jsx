import PokemonBankPokemonCard from "../PokemonBankPokemonCard/PokemonBankPokemonCard";
export default function PokemonTable({ pokeArray, pokemonBank}){
    const pokemonEntry = pokeArray.map((p, idx) => <PokemonBankPokemonCard pokemon={p} key={idx}/>);
    
    const output = (!(pokeArray.length) && !pokemonBank) ? <p>No Pokemon Yet</p> : pokemonEntry;
    
    return output;
} 