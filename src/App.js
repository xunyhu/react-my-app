import logo from './logo.svg';
import './App.css';

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // console.log('doubled', doubled);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
