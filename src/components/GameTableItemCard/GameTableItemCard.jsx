import {Link } from 'react-router-dom'
export default function GameTableItemCard({region, generation, nuzlock, saveFile}){

    return (
        <>
            {nuzlock ? 
                <>
                    <div>Nuzlock of Game in {region}, Gen {generation}</div>
                    <Link to={`/details/${saveFile._id}`}>
                        <button>Number of Pokemon Caught: {saveFile.pokemon.length}</button>
                    </Link>
                </> 
                :
                <>
                    <div>Game in {region}, Gen {generation}</div>
                    <Link to={`/details/${saveFile._id}`}>
                        <button>Number of Pokemon Caught: {saveFile.pokemon.length}</button>
                    </Link>
                    
                </>
            }
        </>
    );
}