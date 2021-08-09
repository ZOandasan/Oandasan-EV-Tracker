import { useState } from 'react';
import { createSave } from '../../utilities/save-files-api'

export default function NewSaveForm ({setShowForm}) {
    const [formData, setFormData] = useState({
      region: '',
      generation: '',
      isNuzlock: '',
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
        console.log('IN_TRY');
        const formInfo = {...formData};
        const saveData = await createSave(formInfo);
        setShowForm(false);
        console.log(saveData);

        //Use the saveData to get an ID, and then render the Details Page.
        //(History.push)
      } catch {
        // An error occurred
        setFormData({ error: 'Submission Failed - Try Again'});
      }
    };
  
    // Must override the render method
    // The render method takes the place of 
    // a function component, in that its job
    // is to return the UI as JSX
    return (
    <div>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Region</label>
            <select name="region" onChange={handleChange}>
                <option value="Kanto" selected>Kanto</option>
                <option value="Jhoto">Jhoto</option>
                <option value="Hoenn">Hoenn</option>
                <option value="Sinnoh">Sinnoh</option>
                <option value="Unova">Unova</option>
                <option value="Kalos">Kalos</option>
                <option value="Alola">Alola</option>
            </select> 
            
            <label>Generation</label>
            <select name="generation" onChange={handleChange}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select> 

            <label>Nuzlock</label>
            <select name="isNuzlock" onChange={handleChange}>
                <option value="false" selected>False</option>
                <option value="true">True</option>
            </select>

            <input type="submit" value="Create New Save" />
        </form>
        </div>
    </div>
    );
}
