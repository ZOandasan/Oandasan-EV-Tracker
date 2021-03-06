import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as saveFilesAPI from '../../utilities/save-files-api'
import NewPokemonForm from "../../components/NewPokemonForm/NewPokemonForm";
import PokemonTable from "../../components/PokemonTable/PokemonTable";

export default function PokemonDetailsPage() {
    const [showForm, setShowForm] = useState(false);
    const [thisSave, setThisSave] = useState({});
    const {id} = useParams();
    const [savedPokemon, setSavedPokemon] = useState([]);
    
    useEffect(function() {
        async function getSave() {
            const gameSave = await saveFilesAPI.getOne(id);
            setThisSave(gameSave);
            setSavedPokemon(gameSave.pokemon);
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
                <NewPokemonForm savedPokemon={savedPokemon} setSavedPokemon={setSavedPokemon} saveId={thisSave._id} setShowForm={setShowForm}/>
                <button onClick={() => setShowForm(false)}>Cancel</button>
            </>
        :
            <div>
                <h2>Region: {thisSave.region} | Gen: {thisSave.generation} | Nuzlock: {nuzlock}</h2>
                <div>
                    <button onClick={() => setShowForm(true)}>New Pokemon</button>
                </div>
                <PokemonTable pokeArray={savedPokemon} pokemonBank={false} saveId={thisSave._id} setSavedPokemon={setSavedPokemon}/>
            </div>
        }

        </>
    )
}