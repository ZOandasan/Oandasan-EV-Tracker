import * as savesApi from '../../utilities/save-files-api';

export default function DeleteSaveForm({id, setShowForm, setSavedGames, savedGames}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const deleteSave = await savesApi.deleteOne(id);
    setShowForm(false);
    let updatedSaves = savedGames.filter(s => s._id !== id);
    setSavedGames(updatedSaves); 
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleDelete}>
        <p>Are you sure you want to DELETE?</p>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}