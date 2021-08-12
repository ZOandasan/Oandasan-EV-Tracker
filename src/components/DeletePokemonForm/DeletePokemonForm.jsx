import * as UPokemonApi from '../../utilities/user-pokemon-api';

export default function DeletePokemonForm({saveId, pokemonId, setShowForm, setSavedPokemon, savedPokemon}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const deletePokemon = await UPokemonApi.deletePokemon(saveId, pokemonId);
    setShowForm(false);
    let updatedPokemon = savedPokemon.filter(p => p._id !== pokemonId);
    setSavedPokemon(updatedPokemon); 
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