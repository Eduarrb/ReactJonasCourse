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
export default function App() {
  // 4️⃣
  return <div className="app">
    <Logo />
    <Formulario />
    <ListaPaquetes />
    <Stadisticas />
  </div>
}

// 3️⃣
function Logo() {
  return <h1>🌴 Muy Lejano 💼</h1>
}

function Formulario() {
  return <div className="add-form">
    <h3>Qué necesitas para tu 😍 viaje?</h3>
  </div>
}

function ListaPaquetes() {
  return <div className="list">LISTA</div>
}

function Stadisticas() {
  return <footer className="stats">
    <em>
      💼 Tienes X elementos en tu lista, y ya tienes Y listados (Y%)
    </em>
  </footer>
}