import * as savesApi from '../../utilities/save-files-api';

export default function DeleteSaveForm({id, setShowForm, setSavedGames, savedGames}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const deleteLocation = await savesApi.deleteOne(id);
    setShowForm(false);
    let updatedSaves = savedGames.filter(s => s._id !== id);
    setSavedGames(updatedSaves); 
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleDelete}>
        <label>Are you sure you want to DELETE?</label>
        <button type="submit">Delete</button>
        <button onClick={() => setShowForm(false)}>Cancel</button>
      </form>
    </div>
  );
}