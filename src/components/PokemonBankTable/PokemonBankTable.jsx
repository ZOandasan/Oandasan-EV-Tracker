import PokemonTable from "../PokemonTable/PokemonTable";
export default function PokemonBankTable({saveFiles}){
    
    function setSavedPokemon(){
        return;
    }

    const tableItem = saveFiles.map((s, idx) => <PokemonTable pokeArray={s.pokemon} key={idx} pokemonBank={true} saveId={s._id} setSavedPokemon={setSavedPokemon}/>)
    return (
        <>  
            {tableItem}
        </>
    );
} 