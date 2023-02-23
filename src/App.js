import logo from './logo.svg';
import './App.css';
import Board from '../src/board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tres en linea</h1>
        <img src={logo} className="App-logo" alt="logo" />
       <Board></Board>
      </header>
    </div>
  );
}

export default App;
