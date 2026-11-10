import { useState } from 'react';

export default function App() {
	const [items, setItems] = useState([]);

	function manejadorItems(item) {
		setItems((items) => [...items, item]);
	}

	function manejadorBorrarItem(id){
		setItems((items) => items.filter(item => item.id !== id));
	}

	function manejadorToggleItem(id){
		setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
	}

	return (
		<div className='app'>
			<Logo />
			<Formulario onManejadorItems={manejadorItems} />
			<ListaPaquetes items={items} onManejadorBorrarItem={manejadorBorrarItem} onManejadorToggleItem={manejadorToggleItem} />
			<Stadisticas items={items} />
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

function ListaPaquetes({ items, onManejadorBorrarItem, onManejadorToggleItem }) {
	// 2️⃣ Estado para ordenar
	const [ordenarPor, setOrdenadoPor] = useState('input');

	let sortedItems;
	if(ordenarPor === 'input') sortedItems = items;
	if(ordenarPor === 'descripcion') sortedItems = items.slice().sort((a, b) => a.descripcion.localeCompare(b.descripcion));
	if(ordenarPor === 'packed') sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

	return (
		<div className='list'>
			<ul>
				{/* 3️⃣ cambiar  */}
				{/* {items.map((item) => (
					<Item item={item} key={item.id} onManejadorBorrarItem={onManejadorBorrarItem} onManejadorToggleItem={onManejadorToggleItem} />
				))} */}
				{sortedItems.map((item) => (
					<Item item={item} key={item.id} onManejadorBorrarItem={onManejadorBorrarItem} onManejadorToggleItem={onManejadorToggleItem} />
				))}
			</ul>
			{/* 1️⃣ camos para ordenar */}
			<div className='actions' onChange={(e) => setOrdenadoPor(e.target.value)}>
				<select value={ordenarPor}>
					<option value="input">Ordenar por entradas</option>
					<option value="descripcion">Ordenar por Descripcion</option>
					<option value="packed">Ordenar por Empaquetados</option>
				</select>
			</div>
		</div>
	);
}

function Item({ item, onManejadorBorrarItem, onManejadorToggleItem }) {
	return (
		<li>
			<input type="checkbox" value={item.packed} onChange={() => onManejadorToggleItem(item.id)} />
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.cantidad} {item.descripcion}
			</span>
			<button onClick={() => onManejadorBorrarItem(item.id)}>❌</button>
		</li>
	);
}

function Stadisticas({ items }) {
	if(!items.length) return <p className='stats'>
		<em>
			Empieza en agregar elementos la lista 🚀
		</em>
	</p>;

	const numItems = items.length;
	const numPacked = items.filter(item => item.packed).length;
	const porcentaje = Math.round((numPacked / numItems) * 100) || 0;

	

	return (
		<footer className='stats'>
			<em>
				{porcentaje === 100 ? 'Tienes todo listo! ✈️' : `💼 Tienes ${numItems} elementos en tu lista, y ya tienes empaquetados ${numPacked} listados (${porcentaje}%)`}
			</em>
		</footer>
	);
}
