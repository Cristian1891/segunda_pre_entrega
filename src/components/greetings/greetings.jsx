import React from 'react';
import './Greetings.css';

function Greetings({ message }) {
  console.log("Hola");
  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
}

export default Greetings;
