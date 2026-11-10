// 4️⃣ El statese debe importar
import { useEffect, useState } from "react";

// 1️⃣
export default function App() {
  // 3️⃣ state
  /*
  En React, el state (estado) es un objeto interno que guarda información que puede 
  cambiar con el tiempo y que afecta cómo se renderiza el componente.

  Piensa en él como la “memoria viva” de tu componente: cuando el state cambia, 
  React vuelve a renderizar la parte de la interfaz que depende de ese valor.
  */

  const [consejo, establecerConsejo] = useState("");

  // 8️⃣ otro state
  const [click, estableceClicks] = useState(0);

  // 2️⃣
  async function getDevice() {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data.slip.advice);
    // 5️⃣ ejecutar el state
    establecerConsejo(data.slip.advice);

    // 9️⃣
    estableceClicks((c) => c + 1);
  }

  // 🔟 cuando reiniciamos la app no aparece nada, para eso usaremos useEffect
  /*
  Es un Hook de React que te permite ejecutar código después de que el componente 
  se renderiza.

  El array vacío ([]) significa:

  "Ejecuta este efecto solo una vez, justo después de que el componente se monte (mount) en pantalla."

  Es equivalente a componentDidMount en los componentes de clase.

  Si ese array tuviera variables dentro, el efecto se volvería a ejecutar cada vez que alguna de esas 
  variables cambie.

  Se ejecuta 2 veces pero veremos ese comportamiento mas adelante
  */
  useEffect(function () {
    getDevice();
  }, []);

  return (
    <div>
      <h1>Hola Mundo</h1>
      <h2>
        {/* 6️⃣ imprimir el state */}
        {consejo}
      </h2>
      <button onClick={getDevice}>Obtener un consejo</button>

      {/* 7️⃣ imprimiremos la cantidad de clicks con otro componente */}
      <Message click={click} />
    </div>
  );
}

// 7️⃣.1️⃣
/*
  Message es el nombre del componente.
  Los componentes en React empiezan con mayúscula por convención.
  Recibe un parámetro llamado props (propiedades) que son datos que el componente 
  padre le envía al hijo.
*/
function Message(props) {
  return (
    <p>
      Has hecho click <strong>{props.click}</strong> veces
    </p>
  );
}