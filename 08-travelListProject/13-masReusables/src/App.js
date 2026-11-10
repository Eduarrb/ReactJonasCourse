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

						{/* 1️⃣ 💥💥💥 */}
						{/* <p className='message'>
							<h3>Paso {paso}</h3> {messages[paso - 1]}
						</p> */}

						{/* 3️⃣ */}
						<PasoMensaje paso={paso}>
							{messages[paso - 1]}
						</PasoMensaje>

						<div className='buttons'>
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

function Boton({textColor, bgColor, onClick, children}) { 
	return <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
		{children}
	</button>;
}

// 2️⃣
function PasoMensaje({paso, children}) {
	return (
		<div className='message'>
			<h3>Paso {paso}</h3>
			{children}
		</div>
	);
}