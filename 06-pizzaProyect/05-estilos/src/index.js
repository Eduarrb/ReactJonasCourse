import React from 'react';
import ReactDom from 'react-dom/client';
// 4️⃣
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
    // 5️⃣ agregar las clases del css
		<div className='container'>
      <Header />
      <Menu />
      <Footer />
		</div>
	);
}

function Header() {
  // 1️⃣ Usaremos los estilos directamente en los elementos
  // NOTA se usa los estilos como objeto de js
  return (
    <header className='header'>
      <h1 /*style={{ color: "red", fontSize: '42px', textTransform: "uppercase" }}*/>Coorporacion de Pizza Rapida en React</h1>
    </header>
  )
}

function Menu() {
  // 2️⃣ estilos como variable
  const estilo = { color: "red", fontSize: '42px', textTransform: "uppercase" };
  return (
    <main className='menu'>
      {/* 3️⃣ Llamar la variable */}
      <h2 /*style={estilo}*/>Nuestro Menú</h2>
      {/* ALERTA no es la mejor manera de usar el css asi que importaremos el archivo desde el inicio del codigo */}
      <Pizza />
      <Pizza />
    </ main>
  )
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

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h3>Pizza Prosciutto</h3>
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
