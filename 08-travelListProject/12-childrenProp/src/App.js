import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	const [paso, setPaso] = useState(1); 
	const [estaAbierto, setEstaAbierto] = useState(true);

	function handlePrevious() {
		if(paso > 1) setPaso(prevPaso => prevPaso - 1);
	}

	function handleNext() {
		if (paso < 3) setPaso(prevPaso => prevPaso + 1);
	}
	return (
		<>
			<button className='close' onClick={
				() => setEstaAbierto(es => !es)
			}>&times;</button>

			{
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
							{/* 2️⃣💥💥 */}
							{/* <button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handlePrevious}>
								Anterior
							</button>
							<button style={{ backgroundColor: '#7950f2', color: 'white' }} onClick={handleNext}>
								Siguiente
							</button> */}

							{/* 3️⃣ llamar al componente como sifuera html */}
							<Boton bgColor='#7950f2' textColor='#fff' onClick={handlePrevious} >
								<span>👈</span> Anterior
							</Boton>
							<Boton bgColor='#7950f2' textColor='#fff' onClick={handleNext} >
								Siguiente <span>👉</span> 
							</Boton>
						</div>
					</div>
				)
			}
		</>
	);
}

// 1️⃣ crear botones reusables
/*
	children es una propiedad especial que representa los elementos hijos que se colocan dentro de un componente con apertura y cierre.
	Esto te permite crear componentes “contenedores” o “layouts” reutilizables
*/
function Boton({textColor, bgColor, onClick, children}) { 
	return <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
		{children}
	</button>;
}