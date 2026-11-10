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
  const [amigos, setAmigos] = useState(initialFriends);
  const [mostrarAddFriend, setMostrarAddFriend] = useState(false);

  // 1️⃣ estado para seleccionar
  const [amigoSeleccionado, setAmigoSeleccionado] = useState(null);

  function manejadorMostrarAddFriend() {
    setMostrarAddFriend((show) => !show);
  }
  
  function manejarAgregarAmigo(nuevoAmigo) {
    setAmigos(amigos => [...amigos, nuevoAmigo]);
    setMostrarAddFriend(false);
  }

  // 3️⃣
  function manejadorSeleccion(amigo){
    setAmigoSeleccionado(amigo);
  }

  return <div className="app">
    <div className="sidebar">
      {/* 4️⃣ pasar el manejador de seleccion */}
      <ListaAmigos amigos={amigos} onSeleccionarAmigo={manejadorSeleccion} />
      {mostrarAddFriend && <AgregarAmigoForm onAddFriend={manejarAgregarAmigo} />}
      <Button onClick={manejadorMostrarAddFriend}>
        {mostrarAddFriend ? "Cerrar" : "Nuevo Amigo"}
      </Button>
    </div>
    {/* 2️⃣ */}
    {/* <DividirCuentaForm /> */}
    {amigoSeleccionado && <DividirCuentaForm amigoSeleccionado={amigoSeleccionado} />}
  </div>
}

// 5️⃣ pasar onSeleccionarAmigo
function ListaAmigos({ amigos, onSeleccionarAmigo }) {
  return <ul>
    {amigos.map(amigo => (
      // 6️⃣ pasar onSeleccionarAmigo al componente Amigo
      <Amigo key={amigo.id} amigo={amigo} onSeleccionarAmigo={onSeleccionarAmigo} />
    ))}
  </ul>
}

// 7️⃣ recibir onSeleccionarAmigo
function Amigo({amigo, onSeleccionarAmigo}) {
  return (
    <li>
      <img src={amigo.image} alt={amigo.name} />
      <h3>{amigo.name}</h3>
      {amigo.balance < 0 && <p className="red">Debes: {amigo.name} {Math.abs(amigo.balance)}$</p>}
      {amigo.balance > 0 && <p className="green">{amigo.name} te debe {Math.abs(amigo.balance)}$</p>}
      {amigo.balance === 0 && <p>Tu y {amigo.name} están saldados</p>}
      {/* 7️⃣ pasar onSeleccionarAmigo al botón */}
      <Button onClick={() => onSeleccionarAmigo(amigo)}>Seleccionar</Button>
    </li>
  )
}

function AgregarAmigoForm({ onAddFriend }) {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('https://i.pravatar.cc/48');

  function manjadorSubmit(e) {
    e.preventDefault();

    if(!nombre || !imagen) return;
    const id = crypto.randomUUID();
    const nuevoAmigo = {
      name: nombre,
      image: `${imagen}?=${id}`,
      balance: 0,
      id
    };
    console.log("Nuevo amigo creado:", nuevoAmigo);

    onAddFriend(nuevoAmigo);

    setNombre('');
    setImagen('https://i.pravatar.cc/48');
  }


  return (
    <form className="form-add-friend" onSubmit={manjadorSubmit}>
      <label>👩‍🤝‍🧑🏻 Nombre Amigo</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <label>🖼  URL Imagen</label>
      <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      <Button>Agregar</Button>
    </form>
  )
}

function Button({children, onClick}) {
  return <button className="button" onClick={onClick}>{children}</button>
}

// 8️⃣ recibir amigoSeleccionado
function DividirCuentaForm({ amigoSeleccionado }) {
  return (
    <form className="form-split-bill">
      {/* 9️⃣ pasar datos */}
      <h2>Dividir la cuenta con {amigoSeleccionado.name}</h2>
      <label>💰 Valor cuenta</label>
      <input type="text" />
      <label>🙍‍♀️ Tu gasto</label>
      <input type="text" />
      {/* 🔟 */}
      <label>👩‍🤝‍🧑🏻 {amigoSeleccionado.name} gasto</label>
      <input type="text"  disabled/>
      <label>💸 ¿Quién pagó la cuenta?</label>
      <select>
        <option value="user">Tú</option>
        {/* 1️⃣1️⃣ */}
        <option value="friend">{amigoSeleccionado.name}</option>
      </select>
      <Button>Dividir cuenta</Button>
    </form>
  )
}