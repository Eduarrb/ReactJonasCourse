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
  // 7️⃣
  const [amigos, setAmigos] = useState(initialFriends);
  const [mostrarAddFriend, setMostrarAddFriend] = useState(false);

  function manejadorMostrarAddFriend() {
    setMostrarAddFriend((show) => !show);
  }
  
  // 🔟
  function manejarAgregarAmigo(nuevoAmigo) {
    setAmigos(amigos => [...amigos, nuevoAmigo]);
    // 1️⃣4️⃣ cerrar el form
    setMostrarAddFriend(false);
  }

  return <div className="app">
    <div className="sidebar">
      {/* 8️⃣ pasar props */}
      <ListaAmigos amigos={amigos} />
      {/* 1️⃣1️⃣ */}
      {mostrarAddFriend && <AgregarAmigoForm onAddFriend={manejarAgregarAmigo} />}
      <Button onClick={manejadorMostrarAddFriend}>
        {mostrarAddFriend ? "Cerrar" : "Nuevo Amigo"}
      </Button>
    </div>
    <DividirCuentaForm />
  </div>
}
// 9️⃣
function ListaAmigos({ amigos }) {
  // 6️⃣ 💥💥
  // const amigos = initialFriends;
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

// 1️⃣2️⃣
function AgregarAmigoForm({ onAddFriend }) {
  // 1️⃣
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('https://i.pravatar.cc/48');

  // 5️⃣
  function manjadorSubmit(e) {
    e.preventDefault();

    if(!nombre || !imagen) return;
    // console.log("Nuevo amigo:", {nombre, imagen});
    const id = crypto.randomUUID();
    const nuevoAmigo = {
      name: nombre,
      image: `${imagen}?=${id}`,
      balance: 0,
      id
    };
    console.log("Nuevo amigo creado:", nuevoAmigo);

    // 1️⃣3️⃣
    onAddFriend(nuevoAmigo);

    setNombre('');
    setImagen('https://i.pravatar.cc/48');
  }


  return (
    // 4️⃣ agregar onSubmit al form
    <form className="form-add-friend" onSubmit={manjadorSubmit}>
      <label>👩‍🤝‍🧑🏻 Nombre Amigo</label>
      {/* 2️⃣ */}
      {/* <input type="text" /> */}
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <label>🖼  URL Imagen</label>
      {/* 3️⃣ */}
      {/* <input type="text" /> */}
      <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      {/* PROBAR resultado en chrome react extention */}
      <Button>Agregar</Button>
    </form>
  )
}

function Button({children, onClick}) {
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