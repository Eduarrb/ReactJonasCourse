import { useState } from 'react';

const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

export default function App() {
	const [amigos, setAmigos] = useState(initialFriends);
	const [mostrarAddFriend, setMostrarAddFriend] = useState(false);

	const [amigoSeleccionado, setAmigoSeleccionado] = useState(null);

	function manejadorMostrarAddFriend() {
		setMostrarAddFriend((show) => !show);
	}

	function manejarAgregarAmigo(nuevoAmigo) {
		setAmigos((amigos) => [...amigos, nuevoAmigo]);
		setMostrarAddFriend(false);
	}

	function manejadorSeleccion(amigo) {
		setAmigoSeleccionado(amigo);
	}

	return (
		<div className='app'>
			<div className='sidebar'>
				{/* 1️⃣ pasar amigoSeleccionado */}
				<ListaAmigos amigos={amigos} onSeleccionarAmigo={manejadorSeleccion} amigoSeleccionado={amigoSeleccionado} />
				{mostrarAddFriend && <AgregarAmigoForm onAddFriend={manejarAgregarAmigo} />}
				<Button onClick={manejadorMostrarAddFriend}>{mostrarAddFriend ? 'Cerrar' : 'Nuevo Amigo'}</Button>
			</div>
			{amigoSeleccionado && <DividirCuentaForm amigoSeleccionado={amigoSeleccionado} />}
		</div>
	);
}

// 2️⃣ recibir onSeleccionarAmigo
function ListaAmigos({ amigos, onSeleccionarAmigo, amigoSeleccionado }) {
	return (
		<ul>
			{amigos.map((amigo) => (
        // 3️⃣ pasar onSeleccionarAmigo
				<Amigo key={amigo.id} amigo={amigo} onSeleccionarAmigo={onSeleccionarAmigo} amigoSeleccionado={amigoSeleccionado} />
			))}
		</ul>
	);
}

// 4️⃣ recibir onSeleccionarAmigo
function Amigo({ amigo, onSeleccionarAmigo, amigoSeleccionado }) {
  const estaSeleccionado = amigoSeleccionado.id === amigo.id;
	return (
		<li className={estaSeleccionado ? 'selected' : ''}>
			<img src={amigo.image} alt={amigo.name} />
			<h3>{amigo.name}</h3>
			{amigo.balance < 0 && (
				<p className='red'>
					Debes: {amigo.name} {Math.abs(amigo.balance)}$
				</p>
			)}
			{amigo.balance > 0 && (
				<p className='green'>
					{amigo.name} te debe {Math.abs(amigo.balance)}$
				</p>
			)}
			{amigo.balance === 0 && <p>Tu y {amigo.name} están saldados</p>}
      {/* 5️⃣ */}
			<Button onClick={() => onSeleccionarAmigo(amigo)}>{estaSeleccionado ? 'Cerrar' : 'Seleccionar'}</Button>
		</li>
	);
}

function AgregarAmigoForm({ onAddFriend }) {
	const [nombre, setNombre] = useState('');
	const [imagen, setImagen] = useState('https://i.pravatar.cc/48');

	function manjadorSubmit(e) {
		e.preventDefault();

		if (!nombre || !imagen) return;
		const id = crypto.randomUUID();
		const nuevoAmigo = {
			name: nombre,
			image: `${imagen}?=${id}`,
			balance: 0,
			id,
		};
		console.log('Nuevo amigo creado:', nuevoAmigo);

		onAddFriend(nuevoAmigo);

		setNombre('');
		setImagen('https://i.pravatar.cc/48');
	}

	return (
		<form className='form-add-friend' onSubmit={manjadorSubmit}>
			<label>👩‍🤝‍🧑🏻 Nombre Amigo</label>
			<input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
			<label>🖼 URL Imagen</label>
			<input type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
			<Button>Agregar</Button>
		</form>
	);
}

function Button({ children, onClick }) {
	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	);
}

function DividirCuentaForm({ amigoSeleccionado }) {
	return (
		<form className='form-split-bill'>
			<h2>Dividir la cuenta con {amigoSeleccionado.name}</h2>
			<label>💰 Valor cuenta</label>
			<input type='text' />
			<label>🙍‍♀️ Tu gasto</label>
			<input type='text' />
			<label>👩‍🤝‍🧑🏻 {amigoSeleccionado.name} gasto</label>
			<input type='text' disabled />
			<label>💸 ¿Quién pagó la cuenta?</label>
			<select>
				<option value='user'>Tú</option>
				<option value='friend'>{amigoSeleccionado.name}</option>
			</select>
			<Button>Dividir cuenta</Button>
		</form>
	);
}
