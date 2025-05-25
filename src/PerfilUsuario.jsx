import React, { useState, useEffect } from "react";
import "./styles/PerfilUsuario.css";
import Nav from "./components/Nav";

const PerfilUsuario = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    nationality: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("perfilUsuario"));
    if (storedData) setFormData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    localStorage.setItem("perfilUsuario", JSON.stringify(formData));
    alert("Datos guardados correctamente.");
  };

  return (
    <div>
      <Nav />
      <div className="perfil-container">
        <div className="perfil-card">
          <h2>INFORMACIÓN PERSONAL</h2>
          <p className="subtitulo">Actualiza tu información personal</p>
          <form className="perfil-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nombre de Usuario</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label>Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <label>Número de Celular</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="guardar-btn">
              Guardar Datos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;





