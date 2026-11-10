import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

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


function App() {  
	return (
		<div className='container'>
      <Header />
      <Menu />
      <Footer />
		</div>
	);
}

function Header() {
  return (
    <header className='header'>
      <h1>Coorporacion de Pizza Rapida en React</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Nuestro Menú</h2>
      {/* 3️⃣ pasaremos los props al componente */}
      <Pizza nombre="Pizza Prosciutto" ingredientes="Tomato, mozarella, ham, aragula, and burrata cheese" foto="pizzas/spinaci.jpg" price="10" />

      {/* 4️⃣ podemos pasar otro elemento con las props */}
      <Pizza nombre="Pizza Margherita" ingredientes="Tomato and mozarella" foto="pizzas/margherita.jpg" price={10} />

      {/* 5️⃣ 
        Realizar Reto 
        DIRECCION https://codesandbox.io/p/sandbox/reto-n1-jvhs67?file=%2Fsrc%2Findex.js%3A22%2C11
      */}
    </main>
  )
}

// 2️⃣ mover aqui y pasar props 
function Pizza(props) {
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.foto} alt={props.nombre} />
      <div>
        <h3>{props.nombre}</h3>
        <p>{props.ingredientes}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hora = new Date().getHours();
  const horaApertura = 12;
  const horaCierre = 22;

  const estaAbierto = hora >= horaApertura && hora <= horaCierre;
  console.log(estaAbierto)
  return (
    <footer className='footer'>{new Date().toLocaleDateString()}. Siempre abrimos</footer>
  )
}

// 1️⃣ Mover este componente despues de menu

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h3>Pizza Prosciutto</h3>
//       <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
