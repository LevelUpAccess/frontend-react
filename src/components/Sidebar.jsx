/* eslint-disable react/jsx-key */
import Categoria from "./Categoria"
import useQuiosco from "../hooks/useQuiosco"
import { useAuth } from "../hooks/useAuth"

export default function Sidebar() {

  const { categorias } = useQuiosco()
  const { logout, user } = useAuth({ middleware: 'auth' })

  // Filtramos las categorías para que solo se desplieguen aquellas con IDs del 1 al 7
  const categoriasFiltradas = categorias.filter(categoria => categoria.id >= 1 && categoria.id <= 6);

  return (
    <aside style={{ marginTop: '70px' }} className="mt-6 md:w-72 bg-[#121212]">
      <div className="p-4">
        <img
          className="w-20 mx-auto"
          src="img/avatar.png"
          alt="Imagen logo"
        />
      </div>

      <p className="my-1 text-xl text-center text-white">Bienvenido: {user?.name}</p>

      <div className="mt-10 text-white">

        {categoriasFiltradas.map(categoria => (
          <Categoria
            //React siempre espera una key siempre que estes iterando algo.
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </div>

      {/* <div className="my-5 py-5">
                <button 
                    type="button" 
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >

                Cancelar Orden
                
                </button>
            </div> */}

    </aside>
  )
}


//QUE SON LOS PROPS - significado corto de propiedades o propierties, y los props son argumentos que se pasan entre componentes de react, pasar info y asi xd, son muy similares a los atributos de html
