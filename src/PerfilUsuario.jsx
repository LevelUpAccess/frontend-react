import React, { useState, useEffect } from "react";
import "./styles/PerfilUsuario.css";
import Nav from "./components/Nav";

import { useAuth } from "./hooks/useAuth"



const PerfilUsuario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("AUTH_TOKEN");
      if (!token) {
        alert("Token no encontrado. Inicia sesión.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/usuario/perfil", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          alert("Error al cargar datos del usuario.");
          return;
        }

        const userData = await response.json();

        setFormData((prev) => ({
          ...prev,
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
        }));
      } catch (error) {
        console.error("Error al obtener datos del perfil:", error);
        alert("Error al cargar datos del usuario.");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const token = localStorage.getItem("AUTH_TOKEN");
    if (!token) {
      alert("Token no encontrado. Inicia sesión.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/usuario/perfil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errores = errorData.errors
          ? Object.values(errorData.errors).map((e) => e.join(", ")).join("\n")
          : errorData.message || "Error al actualizar.";
        alert("Errores:\n" + errores);
        return;
      }

      const data = await response.json();
      alert(data.message || "Datos actualizados correctamente.");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error de red al actualizar.");
    }
  };

  return (
    < div >
      <Nav />
      <div className="perfil-container">
        <div className="perfil-card">
          <h2>INFORMACIÓN PERSONAL</h2>
          <p className="subtitulo">Actualiza tu información personal</p>
          <form className="perfil-form" onSubmit={handleSubmit}>
            <div className="input-group">
              {
              }
              <label>Nombre de Usuario: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
              />

              <label>Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
    </div >
  );
};

export default PerfilUsuario;
