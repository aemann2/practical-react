import './App.css';
import Header from './components/layout/header';

function App() {
  return (
    <div className='App'>
      {/* passing "title" as a prop to Header...I don't have to wrap it in curly braces because it's a string */}
      <Header
        title='Hello from App'
        time={new Date().toISOString().slice(0, 10)}
      />
      <body>
        <p>This is body text</p>
      </body>
    </div>
  );
}

export default App;
