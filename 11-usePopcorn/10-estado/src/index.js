import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 1️⃣ */}
    <StarRating maxRating={5} />
    {/* <StarRating maxRating={7} /> */}
    {/* <StarRating /> */}
    {/* 2️⃣ GO StarRatings 4️⃣ */}
  </React.StrictMode>
);