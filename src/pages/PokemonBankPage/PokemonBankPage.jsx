import PokemonBankTable from "../../components/PokemonBankTable/PokemonBankTable";
import { useState, useEffect } from "react";
import * as saveFilesAPI from '../../utilities/save-files-api'
export default function PokemonBankPage() {
    const [savedGames, setSavedGames] = useState([]);
  
    useEffect(function() {
      async function getSavedGames() {
          const gameSaves = await saveFilesAPI.getAll();
          setSavedGames(gameSaves);
      }
      getSavedGames();
    }, []);


    return (
      <>
        <h1>Your Pokemon Bank</h1>
        <PokemonBankTable saveFiles={savedGames}/>
      </>
    );
}