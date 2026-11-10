import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    {/* 1️⃣ Se puede llamar otro componente pasando los props de colores y tamaño */}
    <StarRating size={24} color="peru" className="test" />
    {/* 2️⃣ GO StarRating 1️⃣2️⃣ */}
  </React.StrictMode>
);