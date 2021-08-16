import { useState } from 'react';
import { createPokemon } from '../../utilities/user-pokemon-api'
import * as PokeAPI from '../../utilities/PokeAPI';

export default function NewPokemonForm ({setSavedPokemon, savedPokemon, setShowForm, saveId}) {
    const [species, setSpecies] = useState('Pikachu')
    const [formData, setFormData] = useState({
        dexNo: '25',
        nickname: '',
        level: '',
    });
  
    function handleChange (evt){
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
      });
    };

    function handleDexChange(evt){
      if (evt.target.value > 0 && evt.target.value < 808) {
        classifyPokemon(evt.target.value);
      } else {
        setSpecies('Unidentified Pokemon');
      }
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
      });
    }
    
    async function classifyPokemon(dexNo){
      const pokemonSpecies = await PokeAPI.classifyPokemon(dexNo);
      let lowName = pokemonSpecies.name;
      const capitalName = lowName.charAt(0).toUpperCase() + lowName.slice(1);
      setSpecies(capitalName);
    }
  
    async function handleSubmit (evt) {
      evt.preventDefault();
      try {
        const formInfo = {...formData};
        const saveData = await createPokemon(formInfo, saveId, species);
        setSavedPokemon(saveData);
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
            <input name="dexNo" type="number" value={formData.dexNo} onChange={handleDexChange} required />

            <label>Pokemon Species</label>
            <span>{species}</span>
            
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