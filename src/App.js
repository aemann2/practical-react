import './App.css';
import { useState } from 'react';
import Header from './components/layout/header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
// import MyForm from './components/MyForm';
import ValidationForm from './components/ValidationForm';
import FetchRandomUser from './components/FetchRandomUser';

function App(props) {
  const [visible, setVisible] = useState(true);

  // setting a conditional for button text...I could also just do this in the brackets of the button
  const buttonText = visible ? 'hide' : 'show';

  return (
    <div className='App'>
      {/* passing "title" as a prop to Header...I don't have to wrap it in curly braces because it's a string */}
      <Header
        title='Hello from App'
        time={new Date().toISOString().slice(0, 10)}
      />
      <body>
        <FetchRandomUser />
        <br />
        <br />
        <br />
        <p>This is body text</p>
        {/* passing a num value to the Counter */}
        <Counter initialCount={10} />
        {/* conditional render: setting whether the slider is visible or not */}
        <div>{visible ? <ImageSlider /> : null}</div>
        <button onClick={() => setVisible(!visible)}>{buttonText}</button>
        <br />
        <br />
        <ValidationForm />
      </body>
    </div>
  );
}

export default App;
