import React from 'react';
import ReactDOM from 'react-dom/client';
// 1️⃣ quitar estos import por un instate
// import './index.css';
// import App from './App';

// 2️⃣
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3️⃣ quitar el componete por un instatnte */}
    {/* <App /> */}

    {/* 4️⃣ */}
    <StarRating maxRating={10} />
    {/* 5️⃣ GO StarRating.js 3️⃣ */}
  </React.StrictMode>
);