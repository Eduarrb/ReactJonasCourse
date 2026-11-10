import { useState } from 'react';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Sunglasses', quantity: 1, packed: true },
];

export default function App() {
	return (
		<div className='app'>
			<Logo />
			<Formulario />
			<ListaPaquetes />
			<Stadisticas />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Muy Lejano 💼</h1>;
}

function Formulario() {
	const [descripcion, setDescripcion] = useState('');
	const [cantidad, setCantidad] = useState(1);

	// 1️⃣ necesitamos un nuevo estado para alamcenar los items de la lista
	const [items, setItems] = useState([]);

	// 2️⃣ funcion para almacenar los items
	function manejadorItems(item) {
		setItems((items) => [...items, item]);
	}
	// PROBAR
  // ALERTA hay un problema con el estado items, ya que como esta en el componente Formulario no se comparte con el componente ListaPaquetes

	function manejarEnvio(e) {
		e.preventDefault();

		if (!descripcion) return;
		const formNewItem = { descripcion, cantidad, paked: false, id: Date.now() };
		// 3️⃣💥💥 Llamar a la funcion
		// console.log(formNewItem);
		manejadorItems(formNewItem);

		setDescripcion('');
		setCantidad(1);
	}

	return (
		<form className='add-form' onSubmit={manejarEnvio}>
			<h3>Qué necesitas para tu 😍 viaje?</h3>
			<select value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input type='text' placeholder='Item..' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
			<button>Agregar</button>
		</form>
	);
}

function ListaPaquetes() {
	return (
		<div className='list'>
			<ul>
				{initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stadisticas() {
	return (
		<footer className='stats'>
			<em>💼 Tienes X elementos en tu lista, y ya tienes Y listados (Y%)</em>
		</footer>
	);
}
