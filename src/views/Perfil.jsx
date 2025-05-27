import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../hooks/useAuth";
import clienteAxios from "../config/axios";



export default function Perfil() {
  const { logout, user } = useAuth({ middleware: 'auth' })

  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    apellido: '',
    password: '',
    confirmPassword: '',
    current_password: ''
  });


  // Cargar datos cuando el usuario esté disponible
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        apellido: localStorage.getItem("apellido") || ""
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('AUTH_TOKEN');

    try {
      const res = await clienteAxios.put(
        '/api/user/update',
        {
          name: formData.name,
          email: formData.email,
          current_password: formData.current_password,
          password: formData.password,
          password_confirmation: formData.confirmPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      toast.success("Perfil actualizado correctamente");
      console.log("Usuario actualizado:", res.data);
    } catch (error) {
      const response = error.response;

      if (response?.status === 422 && response.data?.errors) {
        const errores = response.data.errors;
        Object.values(errores).forEach((mensajes) => {
          mensajes.forEach((msg) => toast.error(msg));
        });
      } else if (response?.data?.message) {
        toast.error(response.data.message);
      } else {
        toast.error("Ocurrió un error al actualizar el perfil.");
      }

      console.error("Error al actualizar:", response?.data || error);
    }
  };



  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <Nav />
      <div className="mx-auto right-0 mt-20 w-[600px]">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-[#121212] border-b">
            <svg
              aria-hidden="true"
              role="img"
              className="h-24 w-24 text-white rounded-full mx-auto"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
              ></path>
            </svg>
            <p className="pt-2 text-lg font-semibold text-gray-50">
              {formData.name}
            </p>
            <p className="text-sm text-[#ef3440]">{formData.email}</p>
            <div className="mt-5">
              <button
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                onClick={() => setEditando(!editando)}
              >
                {editando ? "Cancelar" : "Editar mi información"}
              </button>
            </div>
          </div>

          {editando && (
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <p>Editar datos personales</p>

              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-3 py-2 border rounded"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Correo"
                className="w-full px-3 py-2 border rounded"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p>Editar contraseña</p>

              <input
                type="password"
                placeholder="Contraseña nueva"
                className="w-full px-3 py-2 border rounded"
                name="password"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full px-3 py-2 border rounded"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <p>Ingresa tu contraseña actual para confirmar</p>

              <input
                type="password"
                placeholder="Contraseña Actual"
                className="w-full px-3 py-2 border rounded"
                name="current_password"
                value={formData.current_password}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#121212] text-white rounded hover:bg-black"
              >
                Guardar cambios
              </button>
            </form>
          )}

          <div>
            <button
              type="button"
              onClick={logout}
              className="w-full px-4 py-3 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <span className="text-sm font-medium text-gray-800">
                Cerrar sesión
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
