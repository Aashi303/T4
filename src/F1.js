import React, { createContext, useState } from 'react';
import F2 from './F2'


// Create a Context for the form data
export const FormContext = createContext();

// Create a Provider component
function F1() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const name= e.target.name;
    const value=e.target.value;
    setFormData({...formData, [name]: value });
  };
  return (
    <><form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <select name="city" onChange={handleChange}>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </label>
      <br />
      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
      </label>
      </form>
    <FormContext.Provider value={{ formData}}>
      <F2/>
    </FormContext.Provider>
   </>

  );
};
export default F1