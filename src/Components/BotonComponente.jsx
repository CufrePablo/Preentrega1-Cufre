// BotonComponente.js
import React from 'react';
import './BotonComponente.css'; 

const BotonComponente = ({ texto, className }) => {
  return (
    <button className={className}>
      {texto}
    </button>
  );
}

export default BotonComponente;
