import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sunglasses", quantity: 1, packed: true },
];

export default function App() {
  return <div className="app">
    <Logo />
    <Formulario />
    <ListaPaquetes />
    <Stadisticas />
  </div>
}

function Logo() {
  return <h1>🌴 Muy Lejano 💼</h1>
}

function Formulario() {
  // 1️⃣
  // NOTA control de elementos en React
  const [descripcion, setDescripcion] = useState(""); // useState vacio para que el input empiece vacio
  const [cantidad, setCantidad] = useState(1);

  function manejarEnvio(e) {
    e.preventDefault();
    // console.log(e);

    // 3️⃣
    if (!descripcion) return; // si no hay descripcion, no hacer nada
    const formNewItem = {descripcion, cantidad, paked: false, id: Date.now()};
    console.log(formNewItem);

    setDescripcion(""); // limpiar el input despues de enviar
    setCantidad(1); // resetear cantidad a 1

    // 4️⃣ GO react.new DIRECCION https://codesandbox.io/p/sandbox/flamboyant-mayer-246p56

    // 5️⃣ GO reto numero 4 es una copia de https://codesandbox.io/p/sandbox/reto2-t3p6qd
  }

  // 2️⃣
  return (
    <form className="add-form" onSubmit={manejarEnvio}>
      <h3>Qué necesitas para tu 😍 viaje?</h3>
      <select value={cantidad} onChange={e => setCantidad(Number(e.target.value))}>
        {/* <option value="{1}">1</option>
        <option value="{2}">2</option>
        <option value="{3}">3</option> */}
        {Array.from({length:20}, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>{num}</option>
        ))}
        {/* 
          ✔️ Crea un array de longitud 20. El primer argumento es un objeto con la propiedad length. 
              Los elementos resultantes son undefined por defecto.
          ✔️ (_, i) => i + 1 (segunda parte de Array.from)
              Es la función map de Array.from. Recibe dos parámetros: el elemento (aquí no se usa, por eso se nombra _) y el índice i.
              Devuelve i + 1, así que el array final será [1, 2, 3, ..., 20]. (índices 0..19 → valores 1..20).
        */}
      </select>
      <input type="text" placeholder="Item.." value={descripcion} onChange={e => setDescripcion(e.target.value)} />
      <button>Agregar</button>
    </form>
  )
}

function ListaPaquetes() {
  return (
    <div className="list">
      <ul>
        {/* 3️⃣ pasar key */}
        {initialItems.map(item => (<Item item={item} key={item.id} /> ))}
      </ul>
    </div>
  );
}

function Item({item}) {
  return <li>
    <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>
}

function Stadisticas() {
  return <footer className="stats">
    <em>
      💼 Tienes X elementos en tu lista, y ya tienes Y listados (Y%)
    </em>
  </footer>
}