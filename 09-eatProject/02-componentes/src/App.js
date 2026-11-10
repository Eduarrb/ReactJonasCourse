const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // 2️⃣💥💥
  // return <div>Hola</div>
  
  // 3️⃣
  return <div className="app">
    <div className="sidebar">
      <ListaAmigos />
    </div>
  </div>
}

// 1️⃣
function ListaAmigos() {
  const amigos = initialFriends;
  return <ul>
    {amigos.map(amigo => (
      <Amigo key={amigo.id} amigo={amigo} />
    ))}
  </ul>
}

function Amigo({amigo}) {
  return (
    <li>
      <img src={amigo.image} alt={amigo.name} />
      <h3>{amigo.name}</h3>
      {amigo.balance < 0 && <p className="red">Debes: {amigo.name} {Math.abs(amigo.balance)}$</p>}
      {amigo.balance > 0 && <p className="green">{amigo.name} te debe {Math.abs(amigo.balance)}$</p>}
      {amigo.balance === 0 && <p>Tu y {amigo.name} están saldados</p>}
      <button className="button">Seleccionar</button>
    </li>
  )
}