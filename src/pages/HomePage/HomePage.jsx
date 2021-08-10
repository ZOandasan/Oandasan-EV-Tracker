//import * as userService from '../../utilities/users-service';
import * as saveFilesAPI from '../../utilities/save-files-api'
import { useState, useEffect } from "react";
import NewSaveForm from '../../components/NewSaveForm/NewSaveForm';
import GameListTable from '../../components/GameListTable/GameListTable';

export default function HomePage({user}) {
  const [showForm, setShowForm] = useState(false);
  const [savedGames, setSavedGames] = useState([]);
  const [selected, setSelected] = useState(0);
    
    useEffect(function() {
        async function getSavedGames() {
            const gameSaves = await saveFilesAPI.getAll();
            setSavedGames(gameSaves);
        }
        getSavedGames();
    }, []);

    function changeSelected(order) {
      if (order !== selected) {
      setSelected(order);
      }
    }


  return (
    <>
    {showForm ? 
      <div>
        <h1>New Save</h1>
        <NewSaveForm setShowForm={setShowForm} />
      </div> 
      :
      <div>
        <h1>Home Page</h1>
        <span>Welcome, {user.name}</span>
        <div>
          <button onClick={() => setShowForm(true)}>Create New Save</button>
          <button>Delete Existing Save</button>
        </div>
        <div>
          <GameListTable saveFiles={savedGames} selected={selected} changeSelected={changeSelected}/>
        </div>
      </div>
    }
    </>
  ); 

}