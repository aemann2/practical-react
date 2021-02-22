import React from 'react';
import logo from '../../../src/logo.svg';

const Header = (props) => {
  // destructuring the props passed in from App.js so I don't have to use dot-notation each time I want to use the objects in the prop
  const { title, time } = props;

  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>{title}</p>
      <p>{time}</p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
};

export default Header;
