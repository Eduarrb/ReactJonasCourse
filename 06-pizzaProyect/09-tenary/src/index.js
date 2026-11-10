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
  const pizzas = pizzaData;
  // 1️⃣ usaremos tenary operators
  // El parser de JSX espera expresiones, no sentencias
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Nuestro Menú</h2>
      {/* Cabiaremos en esta parte */}
      {/* {pizzas && ( */}
      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
        </ul>
      ) : <p>Aún estamos trabajando en nuestro menu</p>}
    </main> 
  )
}

function Pizza(props) {
  console.log(props);
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingridients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hora = new Date().getHours();
  const horaApertura = 12;
  const horaCierre = 22;
  
  const estaAbierto = hora >= horaApertura && hora <= horaCierre;
  // 2️⃣ tenary en footer
  return (
    <footer className='footer'>
      {estaAbierto ? (
        <div className='order'>
          <p>Abrimos hasta {horaCierre}:00. Ven visitanos o ordena online</p>
          <button className='btn'>Ordenar</button>
        </div>
      ) : <p>Estamos felices de atenderte entre {horaApertura}:00 y {horaCierre}:00</p>}
    </footer>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
