import PokemonBankGame from "../PokemonBankGame/PokemonBankGame";
export default function PokemonBankTable({saveFiles}){
    const tableItem = saveFiles.map((s, idx) => <PokemonBankGame  index={idx+1} pokeArray={s.pokemon} key={idx}/>)
    return (
        <>  
            {tableItem}
        </>
    );
} 