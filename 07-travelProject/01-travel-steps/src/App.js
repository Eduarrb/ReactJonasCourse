// 1️⃣💥💥
/*
import logo from './logo.svg';
import './App.css';

function App() {
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
*/

// 2️⃣

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const paso = 3;
  return <div className="steps">
    <div className="numbers">
      <div className={`${paso >= 1 ? 'active' : ''}`}>1</div>
      <div className={`${paso >= 2 ? 'active' : ''}`}>2</div>
      <div className={`${paso >= 3 ? 'active' : ''}`}>3</div>
    </div>

    <p className="message">Paso {paso}: {messages[paso - 1]}</p>

    <div className="buttons">
      <button style={{backgroundColor: '#7950f2', color: 'white'}}>
        Anterior
      </button>
      <button style={{backgroundColor: '#7950f2', color: 'white'}}>
        Siguiente
      </button>
    </div>
  </div>
}
// 3️⃣ Correr en terminal
