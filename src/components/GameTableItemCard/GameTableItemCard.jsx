export default function GameTableItemCard({region, generation, nuzlock, saveFile}){
    return (
        <>
            {nuzlock ? 
                <>
                    <div>Nuzlock of Game in {region}, Gen {generation}</div>
                    <button>Number of Pokemon Caught: {saveFile.pokemon.length}</button>
                </> 
                :
                <>
                    <div>Game in {region}, Gen {generation}</div>
                    <button>Number of Pokemon Caught: {saveFile.pokemon.length}</button>
                </>
            }
        </>
    );
}