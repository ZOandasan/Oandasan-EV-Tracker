//import * as userService from '../../utilities/users-service';
import * as saveFilesAPI from '../../utilities/save-files-api'
import { useState, useEffect } from "react";
import NewSaveForm from '../../components/NewSaveForm/NewSaveForm';
import DeleteSaveForm from '../../components/DeleteSaveForm/DeleteSaveForm';
import GameListTable from '../../components/GameListTable/GameListTable';

export default function HomePage({user}) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [savedGames, setSavedGames] = useState([]);
  const [selected, setSelected] = useState(0);
    
    useEffect(function() {
        async function getSavedGames() {
            const gameSaves = await saveFilesAPI.getAll();
            setSavedGames(gameSaves);
        }
        getSavedGames();
    }, []);

    function changeSelected(id) {
      if (id !== selected) {
        setSelected(id);
      } else {
        setSelected(0);
      }
    } 
  
    if (showCreateForm){
      return (
        <div>
          <h1>New Save</h1>
          <NewSaveForm savedGames={savedGames} setSavedGames={setSavedGames} setShowForm={setShowCreateForm} />
          <button onClick={()=> setShowCreateForm(false)}>Cancel</button>
        </div>
      )
    } else if (showDeleteForm && selected) {
      return (
        <div>
            <h1>Delete Save</h1>
            <DeleteSaveForm savedGames={savedGames} setSavedGames={setSavedGames} setShowForm={setShowDeleteForm} id={selected}/>
            <button onClick={()=> setShowCreateForm(false)}>Cancel</button>
        </div>
      );
    } else {
      return (
          <div>
              <h1>Home Page</h1>
              <span>Welcome, {user.name}</span>
              <div>
                  <button onClick={() => setShowCreateForm(true)}>Create New Save</button>
                  <button onClick={() => setShowDeleteForm(true)}>Delete Existing Save</button>
              </div>
              <div>
                  <GameListTable saveFiles={savedGames} selected={selected} changeSelected={changeSelected}/>
              </div>
          </div>
      ); 
    }
}