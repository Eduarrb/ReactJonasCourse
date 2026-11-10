import { useState } from 'react';

// 7️⃣ eliminar initialItems 💥💥💥
/*
const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Sunglasses', quantity: 1, packed: true },
];
*/
export default function App() {
	const [items, setItems] = useState([]);

	function manejadorItems(item) {
		setItems((items) => [...items, item]);
	}

	// 1️⃣ 
	function manejadorBorrarItem(id){
		setItems((items) => items.filter(item => item.id !== id));
	}

	return (
		<div className='app'>
			<Logo />
			<Formulario onManejadorItems={manejadorItems} />
			{/* 2️⃣ pasar como props */}
			<ListaPaquetes items={items} onManejadorBorrarItem={manejadorBorrarItem} />
			<Stadisticas />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Muy Lejano 💼</h1>;
}

function Formulario({ onManejadorItems }) {
	const [descripcion, setDescripcion] = useState('');
	const [cantidad, setCantidad] = useState(1);

	function manejarEnvio(e) {
		e.preventDefault();

		if (!descripcion) return;
		const formNewItem = { descripcion, cantidad, paked: false, id: Date.now() };

		onManejadorItems(formNewItem);

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

// 3️⃣ recibir el prop
function ListaPaquetes({ items, onManejadorBorrarItem }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					// 4️⃣ pasar el prop al item
					<Item item={item} key={item.id} onManejadorBorrarItem={onManejadorBorrarItem} />
				))}
			</ul>
		</div>
	);
}

// 5️⃣ recibir el prop
function Item({ item, onManejadorBorrarItem }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.cantidad} {item.descripcion}
			</span>
			{/* 6️⃣ */}
			<button onClick={() => onManejadorBorrarItem(item.id)}>❌</button>
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
