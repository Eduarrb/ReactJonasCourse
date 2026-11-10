// 2️⃣ importar useState
import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	// 1️⃣💥💥 usaremos state
	// const paso = 1;
	const [paso, setPaso] = useState(1); 
	console.log(paso);


	function handlePrevious() {
		// 3️⃣ 
		// alert('Hola!');
		if(paso > 1) setPaso(paso - 1);
		// NOTA no se puede actualizar el state directamente => paso = paso - 1; ya que react no se entera del cambio y es inmutable
	}

	function handleNext() {
		// 2️⃣ usar el setPaso
		// alert('Hola!');
		if (paso < 3) setPaso(paso + 1);
	}

	return (
		<div className='steps'>
			<div className='numbers'>
				{/* 4️⃣ con useState ya no es necesario usar template literals */}
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
	);
}
