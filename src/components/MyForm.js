import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [favoritePet, setPet] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // setting the event handler for the input onChange
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangePet = (e) => {
    setPet(e.target.value);
  };

  const handleCheck = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = () => {
    console.log(name, favoritePet, rememberMe);
  };

  return (
    <div>
      {/* passing the state value over as a prop */}
      <input value={name} onChange={handleChange} />
      <textarea value={favoritePet} onChange={handleChangePet} />
      <input type='checkbox' checked={rememberMe} onChange={handleCheck} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyForm;
