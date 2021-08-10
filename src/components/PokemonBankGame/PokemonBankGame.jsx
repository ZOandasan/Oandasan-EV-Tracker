import PokemonBankPokemonCard from "../PokemonBankPokemonCard/PokemonBankPokemonCard";
export default function PokemonBankGame({index, pokeArray}){
    const pokemonEntry = pokeArray.map((p, idx) => <PokemonBankPokemonCard pokemon={p} key={idx}/>)
    return (
        <>  
            {pokemonEntry}
        </>
    );
} 