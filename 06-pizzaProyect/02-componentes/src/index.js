import React from 'react';
import ReactDom from 'react-dom/client';

// 4️⃣ PEGAR todo el contenido de pizzas aqui para mejorar el componente
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
/***********************************************/

// 5️⃣ descargar las imagenes en public/pizzas


function App() {
  // 3️⃣ ALERTA nunca declarar funciones "nuevos componentes" dentro de otros componentes
  /*
    las funciones son objetos en JavaScript, y en React cada re-render crea una nueva instancia si las declaras dentro del componente. Eso afecta la referencialidad (comparaciones de igualdad) y puede disparar renders innecesarios.
  
  */
	return (
		<div>
			<h1>Pizza Project</h1>
      {/* 2️⃣ llamaremos al componente aqui una o varias veces */}
      <Pizza />
      <Pizza />
      <Pizza />
		</div>
	);
}

// 1️⃣ crear componentes
function Pizza() {
  // NOTA en return si usas un solo elemento no necesitas el parentesis a menos que sean mas de 2 elementos
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
