const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	const paso = 1;

	//  2️⃣ funcion de ejecicion del click
	function handlePrevious() {
		alert('Hola!');
	}

	function handleNext() {
		alert('Hola!');
	}

	return (
		<div className='steps'>
			<div className='numbers'>
				<div className={`${paso >= 1 ? 'active' : ''}`}>1</div>
				<div className={`${paso >= 2 ? 'active' : ''}`}>2</div>
				<div className={`${paso >= 3 ? 'active' : ''}`}>3</div>
			</div>

			<p className='message'>
				Paso {paso}: {messages[paso - 1]}
			</p>

			<div className='buttons'>
				{/* 1️⃣ agregaremos el evento en el boton */}
				<button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handlePrevious}>
					Anterior
				</button>
				<button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handleNext}>
					Siguiente
				</button>
			</div>
		</div>
	);
}
