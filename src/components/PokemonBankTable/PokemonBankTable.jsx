import PokemonBankGame from "../PokemonBankGame/PokemonBankGame";
export default function PokemonBankTable({saveFiles}){
    const gameTableItem = saveFiles.map((s, idx) => <PokemonBankGame  index={idx+1} pokeArray={s.pokemon} key={idx}/>)
    return (
        <>  
            <div className="TableItem">
                {gameTableItem}
            </div>
        </>
    );
} 