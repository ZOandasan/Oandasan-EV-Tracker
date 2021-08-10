import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as saveFilesAPI from '../../utilities/save-files-api'
export default function PokemonDetailsPage() {
    const [showForm, setShowForm] = useState(false);
    const [thisSave, setThisSave] = useState({})
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
        {showForm ?
            <>
                <h1>New Pokemon Form</h1>
                <button onClick={() => setShowForm(false)}>Cancel</button>
            </>
        :
            <div>
                <h2>Region: {thisSave.region} | Gen: {thisSave.generation} | Nuzlock: {nuzlock}</h2>
                <div>
                    <button onClick={() => setShowForm(true)}>New Pokemon</button>
                    <button>Delete Pokemon</button>
                </div>
                <div>Table of Pokemon Here</div>
            </div>
        }

        </>
    )
}