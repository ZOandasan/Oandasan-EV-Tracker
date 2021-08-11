import PokemonTable from "../PokemonTable/PokemonTable";
export default function PokemonBankTable({saveFiles}){
    const tableItem = saveFiles.map((s, idx) => <PokemonTable pokeArray={s.pokemon} key={idx} pokemonBank={true}/>)
    return (
        <>  
            {tableItem}
        </>
    );
} 