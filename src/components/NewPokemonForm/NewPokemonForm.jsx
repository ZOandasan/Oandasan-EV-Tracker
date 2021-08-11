import { useState } from 'react';
import { createPokemon } from '../../utilities/user-pokemon-api'

export default function NewPokemonForm ({setSavedPokemon, savedPokemon, setShowForm, id}) {
    const [formData, setFormData] = useState({
        dexNo: '',
        nickname: '',
        level: '',
    });
  
    function handleChange (evt){
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
      });
    };

  
    async function handleSubmit (evt) {
      evt.preventDefault();
      try {
        const formInfo = {...formData};
        const saveData = await createPokemon(formInfo, id);
        setSavedPokemon([...savedPokemon, saveData]);
        setShowForm(false);
      } catch {
        setFormData({ error: 'Submission Failed - Try Again'});
      }
    };

    return (
    <div>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>National Dex Number</label>
            <input name="dexNo" type="number" value={formData.dexNo} onChange={handleChange} required />
            
            <label>Level</label>
            <input name="level" type="number" value={formData.level} onChange={handleChange} required />

            <label>Nickname</label>
            <input name="nickname" type="text" value={formData.nickname} onChange={handleChange} />

            <button type="submit">Create New Pokemon</button>
        </form>
        </div>
    </div>
    );
}