import React, { useState } from 'react';

function MyForm() {
  // const [name, setName] = useState('');
  // const [favoritePet, setPet] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);

  // to set many states at once, we can do this
  const [state, setState] = useState({
    name: '',
    favoritePet: '',
    rememberMe: false,
  });

  // setting the event handlers for all of the fields at once
  const handleChange = (e) => {
    // setting up a ternary to handle the checkbox event
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({
      ...state,
      // e.target.name is taken from the name attribute on the form fields
      [e.target.name]: value,
    });
  };

  // we can actually consolidate almost all these handlers into one...see above

  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleChangePet = (e) => {
  //   setPet(e.target.value);
  // };

  // const handleCheck = () => {
  //   setRememberMe(!rememberMe);
  // };

  const handleSubmit = (e) => {
    // preventing the form from submitting
    e.preventDefault();
    console.log(state.name, state.favoritePet, state.rememberMe);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* passing the state value over as a prop */}
      <input name='name' value={state.name} onChange={handleChange} />
      <textarea
        name='favoritePet'
        value={state.favoritePet}
        onChange={handleChange}
      />
      <input
        name='rememberMe'
        type='checkbox'
        checked={state.rememberMe}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default MyForm;
