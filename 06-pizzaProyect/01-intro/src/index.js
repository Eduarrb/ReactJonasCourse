// 1️⃣
import React from 'react';
import ReactDom from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Pizza Project</h1>
    </div>
  );
}

// v18
const root = ReactDom.createRoot(document.getElementById('root'));

/*
Lo que hace es envolver parte de tu aplicación (normalmente el componente raíz <App />) para que React pueda activar comprobaciones adicionales y advertencias. Estas comprobaciones sirven para ayudarte a detectar malas prácticas o posibles errores futuros en tu código.

Entre las cosas que hace están:

Detectar código obsoleto (deprecated): te avisa si usas funciones o APIs que React planea eliminar.

Identificar efectos secundarios inseguros: por ejemplo, cuando usas useEffect, componentDidMount o componentWillUnmount de forma incorrecta.

Renderizar dos veces en desarrollo (no en producción): esto no es un bug, sino una forma de asegurarse de que tu código no tenga problemas con renderizados adicionales (como ocurre con Suspense o transiciones).

*/

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 3️⃣ CREAR src/index.css
