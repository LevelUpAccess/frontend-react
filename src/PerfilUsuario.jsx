// src/components/PerfilUsuario.jsx
import React from 'react'
import "./styles/PerfilUsuario.css";
import Nav from './components/Nav';

const PerfilUsuario = () => {
  return (
    <div>
       <Nav></Nav>
   

    <div className="perfil-container">
      
      <div className="perfil-card">
        <h2>INFORMACIÓN PERSONAL</h2>
        <p className="subtitulo">Actualiza tu información personal</p>
        <form className="perfil-form">
          <div className="input-group">
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="password" placeholder="Contraseña" required />
          </div>
          <button type="submit" className="guardar-btn">Guardar Datos</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default PerfilUsuario
