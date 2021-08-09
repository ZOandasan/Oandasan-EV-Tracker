import * as userService from '../../utilities/users-service';
import { useState } from "react";
import NewSaveForm from '../../components/NewSaveForm/NewSaveForm';

export default function HomePage({user}) {
  const [showForm, setShowForm] = useState(false);

  function pressNewSave() {
    setShowForm = setShowForm(true);
  }

  if (showForm){
    return (
      <>
        <h1>New Save</h1>
        <NewSaveForm setShowForm={setShowForm} />
      </>
    );
  } else {
    return (
      <>
        <h1>Home Page</h1>
        <span>Welcome, {user.name}</span>
        <div>
          <button onClick={() => pressNewSave()}>Create New Save</button>
          <button>Delete Existing Save</button>
        </div>
      </>
    );
  }
}