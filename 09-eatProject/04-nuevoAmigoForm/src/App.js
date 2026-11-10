// 2️⃣
import { useState } from 'react';

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
  // 1️⃣
  const [mostrarAddFriend, setMostrarAddFriend] = useState(false);

  // 7️⃣
  function manejadorMostrarAddFriend() {
    setMostrarAddFriend((show) => !show);
  }

  return <div className="app">
    <div className="sidebar">
      <ListaAmigos />
      {/* 3️⃣ */}
      {mostrarAddFriend && <AgregarAmigoForm />}
      {/* 6️⃣ */}
      <Button onClick={manejadorMostrarAddFriend}>
        {mostrarAddFriend ? "Cerrar" : "Nuevo Amigo"}
      </Button>
    </div>
    <DividirCuentaForm />
  </div>
}

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
      <Button>Seleccionar</Button>
    </li>
  )
}

function AgregarAmigoForm() {
  return (
    <form className="form-add-friend">
      <label>👩‍🤝‍🧑🏻 Nombre Amigo</label>
      <input type="text" />
      <label>🖼  URL Imagen</label>
      <input type="text" />
      <Button>Agregar</Button>
    </form>
  )
}
// 5️⃣
function Button({children, onClick}) {
  // 4️⃣
  return <button className="button" onClick={onClick}>{children}</button>
}

function DividirCuentaForm() {
  return (
    <form className="form-split-bill">
      <h2>Dividir la cuenta con X</h2>
      <label>💰 Valor cuenta</label>
      <input type="text" />
      <label>🙍‍♀️ Tu gasto</label>
      <input type="text" />
      <label>👩‍🤝‍🧑🏻 X gasto</label>
      <input type="text"  disabled/>
      <label>💸 ¿Quién pagó la cuenta?</label>
      <select>
        <option value="user">Tú</option>
        <option value="friend">X</option>
      </select>
      <Button>Dividir cuenta</Button>
    </form>
  )
}