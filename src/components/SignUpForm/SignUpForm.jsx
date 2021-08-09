import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  function handleChange(evt) {
    // Unlike setSomeState in function components which
    // REPLACE the state with the arg, setState in class components
    // MERGE the provided object with the existing
    // state object
    setFormData({
      ...formData, 
      [evt.target.name]: evt.target.value
    });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or the 
      // 'confirm state properties
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service methods
      // will resolve to the user object included in the
      // payload of the JSON Web Token
      const user = await signUp(formData);
      // Baby step
      setUser(user);
    } catch {
      // An error occurred
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again'});
    }
  };

  // Must override the render method
  // The render method takes the place of 
  // a function component, in that its job
  // is to return the UI as JSX
  const disable = formData.password !== formData.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}
