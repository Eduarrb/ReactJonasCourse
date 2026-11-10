// 1️⃣ 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sunglasses", quantity: 1, packed: true },
];

export default function App() {
  return <div className="app">
    <Logo />
    <Formulario />
    <ListaPaquetes />
    <Stadisticas />
  </div>
}

function Logo() {
  return <h1>🌴 Muy Lejano 💼</h1>
}

function Formulario() {
  return <div className="add-form">
    <h3>Qué necesitas para tu 😍 viaje?</h3>
    
  </div>
}

function ListaPaquetes() {
  // 2️⃣ 💥💥
  // return <div className="list">LISTA</div>

  // 3️⃣
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => (<Item item={item} /> ))}
      </ul>
    </div>
  );
}

// 4️⃣
function Item({item}) {
  return <li>
    <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>
}

function Stadisticas() {
  return <footer className="stats">
    <em>
      💼 Tienes X elementos en tu lista, y ya tienes Y listados (Y%)
    </em>
  </footer>
}