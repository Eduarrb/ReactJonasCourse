import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	const [paso, setPaso] = useState(1); 
	// 1️⃣
	const [estaAbierto, setEstaAbierto] = useState(true);

	function handlePrevious() {
		// 5️⃣ para futuras mejoras usar un callback
		// if(paso > 1) setPaso(paso - 1);
		if(paso > 1) setPaso(prevPaso => prevPaso - 1);
	}

	function handleNext() {
		// 6️⃣
		// if (paso < 3) setPaso(paso + 1);
		if (paso < 3) setPaso(prevPaso => prevPaso + 1);
		// 7️⃣ RETO GO DIRECCION https://codesandbox.io/p/sandbox/t3p6qd?file=%2Fsrc%2FApp.js
	}
	return (
		// 2️⃣ encajonar en un div y llaves
		<>
			{/* 4️⃣ añadiremos un boton */}
			<button className='close' onClick={
				() => setEstaAbierto(es => !es)
			}>&times;</button>

			{
				// 3️⃣ usar una condicional && para renderizar el div
				estaAbierto && (
					<div className='steps'>
						<div className='numbers'>
							<div className={paso >= 1 ? 'active' : ''}>1</div>
							<div className={paso >= 2 ? 'active' : ''}>2</div>
							<div className={paso >= 3 ? 'active' : ''}>3</div>
						</div>

						<p className='message'>
							Paso {paso}: {messages[paso - 1]}
						</p>

						<div className='buttons'>
							<button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handlePrevious}>
								Anterior
							</button>
							<button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handleNext}>
								Siguiente
							</button>
						</div>
					</div>
				)
			}
		</>
	);
}
