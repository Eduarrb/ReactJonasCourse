export default function Stadisticas({ items }) {
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