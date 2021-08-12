import * as UPokemonApi from '../../utilities/user-pokemon-api';

export default function DeletePokemonForm({saveId, pokeId, setShowForm, setSavedPokemon, savedPokemon}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const updatedSave = await UPokemonApi.deletePokemon(saveId, pokeId);
    setShowForm(false);
    setSavedPokemon(updatedSave.pokemon); 
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