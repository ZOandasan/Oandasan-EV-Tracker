import * as userService from '../../utilities/users-service';
import { useState } from "react";
import NewSaveForm from '../../components/NewSaveForm/NewSaveForm';
import GameListTable from '../../components/GameListPage/GameListPage';

export default function HomePage({user}) {
  const [showForm, setShowForm] = useState(false);

  function pressNewSave() {
    setShowForm(true);
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
          <GameListTable />
        </div>
      </div>
    }
    </>
  ); 

}