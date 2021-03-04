import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
};

function ValidationForm() {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const validate = () => {
    let nameError = '';
    let emailError = '';
    // let passwordError = '';

    if (!state.name) {
      nameError = 'Please enter a name';
    }

    if (!state.email.includes('@')) {
      emailError = 'invalid email';
    }

    if (nameError || emailError) {
      setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    console.log(isValid);
    if (isValid) {
      console.log(state.name, state.email, state.password);
      setState({ ...initialState });
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        name='name'
        placeholder='name'
        value={state.name}
        onChange={handleChange}
      />
      <div style={{ fontSize: 12, color: 'red' }}>{state.nameError}</div>
      <input
        name='email'
        placeholder='email'
        value={state.email}
        onChange={handleChange}
      />
      <div style={{ fontSize: 12, color: 'red' }}>{state.emailError}</div>
      <input
        name='password'
        type='password'
        placeholder='password'
        value={state.password}
        onChange={handleChange}
      />
      <div style={{ fontSize: 12, color: 'red' }}>{state.passwordError}</div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ValidationForm;
