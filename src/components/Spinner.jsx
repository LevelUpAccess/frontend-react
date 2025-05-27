// src/components/Spinner.jsx
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-fullscreen-overlay"> {/* Este div NUEVO es el que cubre la pantalla */}
      <div className="sk-chase"> {/* Este es el spinner animado de puntos */}
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
