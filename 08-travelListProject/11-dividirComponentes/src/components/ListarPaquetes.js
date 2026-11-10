import { useState } from 'react';

import Item from './Items';

export default function ListaPaquetes({ items, onManejadorBorrarItem, onManejadorToggleItem, onManejadorLimpiarLista }) {
	const [ordenarPor, setOrdenadoPor] = useState('input');

	let sortedItems;
	if(ordenarPor === 'input') sortedItems = items;
	if(ordenarPor === 'descripcion') sortedItems = items.slice().sort((a, b) => a.descripcion.localeCompare(b.descripcion));
	if(ordenarPor === 'packed') sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

	return (
		<div className='list'>
			<ul>
				{sortedItems.map((item) => (
					<Item item={item} key={item.id} onManejadorBorrarItem={onManejadorBorrarItem} onManejadorToggleItem={onManejadorToggleItem} />
				))}
			</ul>
			<div className='actions' onChange={(e) => setOrdenadoPor(e.target.value)}>
				<select value={ordenarPor}>
					<option value="input">Ordenar por entradas</option>
					<option value="descripcion">Ordenar por Descripcion</option>
					<option value="packed">Ordenar por Empaquetados</option>
				</select>
				<button onClick={onManejadorLimpiarLista}>Limpiar Lista</button>
			</div>
		</div>
	);
}