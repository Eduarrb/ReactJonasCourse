import { useState } from 'react';

const listaTareas = [
	// { id: 1, texto: "jugar", completada: true },
	// { id: 2, texto: "estudiar", completada: false },
	// { id: 3, texto: "dormir", completada: false },
];

export default function App() {
	const [tareas, setTareas] = useState(listaTareas);

	function manjadorAddTarea(nuevaTarea) {
		setTareas((tareas) => [...tareas, nuevaTarea]);
	}

	function manjadorCambiarCompletado(id) {
		setTareas((tareas) => tareas.map((tarea) => (tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea)));
	}

	function manjadorDeleteCompletadas() {
		setTareas((tareas) => tareas.filter((tarea) => !tarea.completada));
	}
	return (
		<>
			<Header />
			<Cards tareas={tareas} />
			<Form onAddTarea={manjadorAddTarea} />
			<Resultados tareas={tareas} onCambiarCompletado={manjadorCambiarCompletado} onDeleteCompletadas={manjadorDeleteCompletadas} />
		</>
	);
}

function Header() {
	return (
		<header className='header'>
			<div className='header__box container'>
				<div className='header__box--icon'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-list-checks w-10 h-10 text-white'
						data-source-location='pages/TodoList:69:12'
						data-dynamic-content='false'
					>
						<path d='m3 17 2 2 4-4'></path>
						<path d='m3 7 2 2 4-4'></path>
						<path d='M13 6h8'></path>
						<path d='M13 12h8'></path>
						<path d='M13 18h8'></path>
					</svg>
				</div>
				<h1 className='header__box--title'>Mis Tareas</h1>
				<p className='header__box--descri'>Organiza tu día con elegancia</p>
			</div>
		</header>
	);
}

function Cards({ tareas }) {
	return (
		<section className='cards'>
			<div className='cards__box container'>
				<article className='cards__box__item total'>
					<div className='cards__box__item__data'>
						<h2 className='cards__box__item__data--title'>Total</h2>
						<div className='cards__box__item__data--num'>{tareas.length}</div>
					</div>
					<div className='cards__box__item__iconBox'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-circle w-7 h-7 text-white'
							data-source-location='components/todo/TaskStats:22:12'
							data-dynamic-content='false'
						>
							<circle cx='12' cy='12' r='10'></circle>
						</svg>
					</div>
				</article>
				<article className='cards__box__item completadas'>
					<div className='cards__box__item__data'>
						<h2 className='cards__box__item__data--title'>Completadas</h2>
						<div className='cards__box__item__data--num'>{tareas.filter((tarea) => tarea.completada).length}</div>
					</div>
					<div className='cards__box__item__iconBox'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-circle-check w-7 h-7 text-white'
							data-source-location='components/todo/TaskStats:39:12'
							data-dynamic-content='false'
						>
							<circle cx='12' cy='12' r='10'></circle>
							<path d='m9 12 2 2 4-4'></path>
						</svg>
					</div>
				</article>
				<article className='cards__box__item progreso'>
					<div className='cards__box__item__data'>
						<h2 className='cards__box__item__data--title'>Progreso</h2>
						<div className='cards__box__item__data--num'>{(tareas.filter((tarea) => tarea.completada).length === 0 ? 0 : (tareas.filter((tarea) => tarea.completada).length / tareas.length) * 100).toFixed(0)}%</div>
					</div>
					<div className='cards__box__item__iconBox'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-trending-up w-7 h-7 text-white'
							data-source-location='components/todo/TaskStats:56:12'
							data-dynamic-content='false'
						>
							<polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
							<polyline points='16 7 22 7 22 13'></polyline>
						</svg>
					</div>
				</article>
			</div>
		</section>
	);
}

function Form({ onAddTarea }) {
	const [tarea, setTarea] = useState('');

	function manejadorSubmit(e) {
		e.preventDefault();
		if (!tarea) return;
		const nuevaTarea = {
			id: Date.now(),
			texto: tarea,
			completada: false,
		};
		onAddTarea(nuevaTarea);
		setTarea('');
	}
	return (
		<section className='form'>
			<div className='form__box container'>
				<form className='form__box__formulario' onSubmit={manejadorSubmit}>
					<div className='form__box__formulario__inputGroup'>
						<input type='text' placeholder='¿Qué necesitas hacer?' value={tarea} onChange={(e) => setTarea(e.target.value)} />
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-sparkles absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400'
							data-source-location='components/todo/TaskInput:34:10'
							data-dynamic-content='false'
						>
							<path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'></path>
							<path d='M20 3v4'></path>
							<path d='M22 5h-4'></path>
							<path d='M4 17v2'></path>
							<path d='M5 18H3'></path>
						</svg>
					</div>
					<div className='form__box__formulario__btnGroup'>
						<button>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-plus w-5 h-5 mr-2'
								data-source-location='components/todo/TaskInput:41:10'
								data-dynamic-content='false'
							>
								<path d='M5 12h14'></path>
								<path d='M12 5v14'></path>
							</svg>
							Añadir
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

function Resultados({ tareas, onCambiarCompletado, onDeleteCompletadas }) {
	return (
		<section className='resultados'>
			<div className='resultados__box container'>
				{tareas.length === 0 ? (
					<NoTareas />
				) : (
					<>
						{tareas.filter((tarea) => tarea.completada).length > 0 && <Delete onDeleteCompletadas={onDeleteCompletadas} tareas={tareas.filter((tarea) => tarea.completada)} />}
						<Pendientes tareas={tareas.filter((tarea) => !tarea.completada)} onCambiarCompletado={onCambiarCompletado} />
						{tareas.filter((tarea) => tarea.completada).length > 0 && <Completados tareas={tareas.filter((tarea) => tarea.completada)} />}
					</>
				)}
			</div>
		</section>
	);
}

function NoTareas() {
	return (
		<div className='resultados__box__noTareas'>
			<div className='resultados__box__noTareas--icon'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-list-checks w-10 h-10 text-white'
					data-source-location='pages/TodoList:69:12'
					data-dynamic-content='false'
				>
					<path d='m3 17 2 2 4-4'></path>
					<path d='m3 7 2 2 4-4'></path>
					<path d='M13 6h8'></path>
					<path d='M13 12h8'></path>
					<path d='M13 18h8'></path>
				</svg>
			</div>
			<h2 className='resultados__box__noTareas--title'>No hay tareas aún</h2>
			<p className='resultados__box__noTareas--descri'>Comienza añadiendo tu primera tarea</p>
		</div>
	);
}

function Delete({ onDeleteCompletadas, tareas }) {
	function manjadorSubmit(e) {
		e.preventDefault();
		onDeleteCompletadas();
	}
	return (
		<div className='resultados__box__delete'>
			<form className='resultados__box__delete__form' onSubmit={manjadorSubmit}>
				<button>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-trash2 w-4 h-4 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300'
						data-source-location='pages/TodoList:107:14'
						data-dynamic-content='false'
					>
						<path d='M3 6h18'></path>
						<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
						<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
						<line x1='10' x2='10' y1='11' y2='17'></line>
						<line x1='14' x2='14' y1='11' y2='17'></line>
					</svg>
					Eliminar completadas ({tareas.length})
				</button>
			</form>
		</div>
	);
}

function Pendientes({ tareas, onCambiarCompletado }) {
	return (
		<div className='resultados__box__pendientes'>
			<h2 className='resultados__box__pendientes--title'>pendientes ({tareas.length})</h2>
			{tareas.map((tarea) => (
				<ListaPendientes key={tarea.id} tarea={tarea} onCambiarCompletado={onCambiarCompletado} />
			))}
		</div>
	);
}

function ListaPendientes({ tarea, onCambiarCompletado }) {
	return (
		<div className='resultados__box__pendientes__item'>
			<div className='resultados__box__pendientes__item--iconBox' onClick={() => onCambiarCompletado(tarea.id)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-circle w-7 h-7 text-white'
					data-source-location='components/todo/TaskStats:22:12'
					data-dynamic-content='false'
				>
					<circle cx='12' cy='12' r='10'></circle>
				</svg>
			</div>
			{tarea.texto}
		</div>
	);
}

function Completados({ tareas }) {
	return (
		<div className='resultados__box__completados'>
			<h2 className='resultados__box__completados--title'>completadas (1)</h2>
			{tareas.map((tarea) => (
				<ListaCompletados key={tarea.id} tarea={tarea} />
			))}
		</div>
	);
}

function ListaCompletados({ tarea }) {
	return (
		<div className='resultados__box__completados__item'>
			<div className='resultados__box__completados__item--iconBox'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-check w-5 h-5'
					data-source-location='components/todo/TaskItem:33:12'
					data-dynamic-content='false'
				>
					<path d='M20 6 9 17l-5-5'></path>
				</svg>
			</div>
			<span>{tarea.texto}</span>
			<div className='resultados__box__completados__item--aviso'>Completado</div>
		</div>
	);
}
