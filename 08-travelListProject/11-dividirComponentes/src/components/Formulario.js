import { useState } from 'react';

export default function Formulario({ onManejadorItems }) {
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