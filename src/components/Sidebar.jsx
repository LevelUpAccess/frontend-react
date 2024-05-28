/* eslint-disable react/jsx-key */
import Categoria from "./Categoria"
import useQuiosco from "../hooks/useQuiosco"

export default function Sidebar() {

    const {categorias} = useQuiosco()


    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img 
                    className="w-40"
                    src="img/logo.svg"
                    alt="Imagen logo"
                />
            </div>

            <div className="mt-10">
                {categorias.map( categoria => (
                    <Categoria
                    //React siempre espera una key siempre que estes iterando algo.
                        key={categoria.id}
                        categoria = {categoria}
                    />
                ))}
            </div>

            <div className="my-5 py-5">
                <button 
                type="button" 
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                >

                Cancelar Orden
                </button>
            </div>
            
        </aside>
  )
}


//QUE SON LOS PROPS - significado corto de propiedades o propierties, y los props son argumentos que se pasan entre componentes de react, pasar info y asi xd, son muy similares a los atributos de html