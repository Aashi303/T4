import React, { useContext } from 'react';
import { FormContext } from './F1';

const F3 = () => {
  const { formData } = useContext(FormContext);
  const p="red"

  // Handle form submission
  const handleSubmit = () => {
    alert(`Submitted Data:\n
      First Name: ${formData.firstName}\n
      Last Name: ${formData.lastName}\n
      Message: ${formData.message}\n
      City: ${formData.city}\n
      Gender: ${formData.gender}`);
  };

  return(
  <div>
<h1 style={{color:p}}>Hello</h1>
  <button onClick={handleSubmit}>Submit</button>
  
  </div>);
};

export default F3;