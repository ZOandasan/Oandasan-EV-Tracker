import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as saveFilesAPI from '../../utilities/save-files-api'
export default function PokemonDetailsPage() {

    const [thisSave, setThisSave] = useState(null)
    const {id} = useParams();
    
    useEffect(function() {
        async function getSave() {
            const gameSave = await saveFilesAPI.getOne(id);
            setThisSave(gameSave);
        }
        getSave();
    }, []);
    
    let nuzlock = 'False';
    if (thisSave.isNuzlock){
        nuzlock = 'True';
    }
    
    return (
        <>
            <div>
                <p>Region: {thisSave.region} | Gen: {thisSave.generation} | Nuzlock: {nuzlock}</p>
            </div>
            
        </>
    )
}