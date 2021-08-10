import {Link } from 'react-router-dom'
export default function GameTableItemCard({region, generation, nuzlock, saveFile}){

    return (
        <>
            {nuzlock ? 
                <>
                    <div>Nuzlock of Game in {region}, Gen {generation}</div>
                    <div>Number of Pokemon Caught: {saveFile.pokemon.length}</div>
                    <Link to={`/details/${saveFile._id}`}>
                        <button>Details</button>
                    </Link>
                </> 
                :
                <>
                    <div>Game in {region}, Gen {generation}</div>
                    <div>Number of Pokemon Caught: {saveFile.pokemon.length}</div>
                    <Link to={`/details/${saveFile._id}`}>
                        <button>Details</button>
                    </Link>
                </>
            }
        </>
    );
}