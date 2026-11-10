import { useState } from 'react';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Sunglasses', quantity: 1, packed: true },
];

export default function App() {
	// 2️⃣
	const [items, setItems] = useState([]);

	// 7️⃣
	function manejadorItems(item) {
		setItems((items) => [...items, item]);
	}

	return (
		<div className='app'>
			<Logo />
			{/* 8️⃣ pasar como prop la funcion */}
			<Formulario onManejadorItems={manejadorItems} />
			{/* 3️⃣ pasar como props */}
			<ListaPaquetes items={items} />
			<Stadisticas />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Muy Lejano 💼</h1>;
}

// 9️⃣ pasar onManejadorItems como props
function Formulario({ onManejadorItems }) {
	const [descripcion, setDescripcion] = useState('');
	const [cantidad, setCantidad] = useState(1);

	// 1️⃣ Moveremos el state al componente App
	// const [items, setItems] = useState([]);

	// 6️⃣ mover toda la funcion al componente App
	// function manejadorItems(item) {
	// 	setItems((items) => [...items, item]);
	// }

	function manejarEnvio(e) {
		e.preventDefault();

		if (!descripcion) return;
		const formNewItem = { descripcion, cantidad, paked: false, id: Date.now() };

		// 🔟 Aqui no hacemos nada ya que estamos pasando el mismo nombre de prop como funcion
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

// 4️⃣ pasar items como props
function ListaPaquetes({ items }) {
	return (
		<div className='list'>
			<ul>
				{/* 5️⃣ pasar los items del formulario */}
				{/* {initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))} */}
				{items.map((item) => (
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
				{/* 1️⃣1️⃣ corregir por los nombres de propiedad correctos */}
				{item.cantidad} {item.descripcion}
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
