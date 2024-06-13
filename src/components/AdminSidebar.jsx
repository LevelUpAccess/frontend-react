import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {

    const { logout } = useAuth({middleware: 'auth'});
  return (
    <aside className="md:w-72 h-screen bg-[#121212]">
        <div className="p-4">
            <img 
                className="w-40 mx-auto mb-10"
                src="../img/logo2.png"
                alt="Imagen logo"
            />
            <p className="text-white text-center">Bienvenido: Administrador</p>
        </div>

        <nav className='flex flex-col p-4'>


            <Link to="/admin" className='font-bold text-lg text-white w-50 bg-[#6b6b6b] rounded p-5 mb-5'>Ordenes</Link>
            <Link to="/admin/productos" className='font-bold text-lg text-white w-50 bg-[#6b6b6b] rounded p-5 mb-5'>Productos</Link>     
        </nav>

        <div className='my-5 px-5'>
            <button 
                type="button" 
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded"
                onClick={logout}
            >
            Cerrar Sesión
            </button>

        </div>
    </aside>
  )
}
