import { useState } from 'react';

export default function App() {
	const [items, setItems] = useState([]);

	function manejadorItems(item) {
		setItems((items) => [...items, item]);
	}

	function manejadorBorrarItem(id){
		setItems((items) => items.filter(item => item.id !== id));
	}

	// 2️⃣
	function manejadorToggleItem(id){
		setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
	}

	return (
		<div className='app'>
			<Logo />
			<Formulario onManejadorItems={manejadorItems} />
			{/* 3️⃣ */}
			<ListaPaquetes items={items} onManejadorBorrarItem={manejadorBorrarItem} onManejadorToggleItem={manejadorToggleItem} />
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

// 4️⃣
function ListaPaquetes({ items, onManejadorBorrarItem, onManejadorToggleItem }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					// 5️⃣
					<Item item={item} key={item.id} onManejadorBorrarItem={onManejadorBorrarItem} onManejadorToggleItem={onManejadorToggleItem} />
				))}
			</ul>
		</div>
	);
}

// 6️⃣ recibir el prop onManejadorBorrarItem
function Item({ item, onManejadorBorrarItem, onManejadorToggleItem }) {
	return (
		<li>
			{/* 1️⃣ agregar checkbox */}
			<input type="checkbox" value={item.packed} onChange={() => onManejadorToggleItem(item.id)} />
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.cantidad} {item.descripcion}
			</span>
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
