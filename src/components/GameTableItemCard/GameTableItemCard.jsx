export default function GameTableItemCard({region, generation, nuzlock, saveFile}){
    return (
        <>
            {nuzlock ? 
                <>
                    <div>Nuzlock of Game in {region}, Gen {generation}</div>
                    <a href="">Number of Pokemon Caught: {saveFile.pokemon.length}</a>
                </> 
                :
                <>
                    <div>Game in {region}, Gen {generation}</div>
                    <a href="">Number of Pokemon Caught: {saveFile.pokemon.length}</a>
                </>
            }
        </>
    );
}