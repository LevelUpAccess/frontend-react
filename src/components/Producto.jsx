import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {


    const {handleClickModal, handleSetProducto, handleClickProductoAgotado} = useQuiosco()
    // console.log(producto)

    const {nombre, imagen, precio} = producto
  return (

    <div className="p-3 shadow bg-[#202020] rounded">
        <img 
            alt={`imagen ${nombre}`} 
            className = "w-full"
            src= {`/img/${imagen}.jpg`}
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold text-white">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}
            </p>

            {botonAgregar && (
            <button
                type="button"
                className="bg-[#ef3340] hover:bg-[#BA0310] text-white w-full mt-5 p-3 uppercase font-bold text-xl transition duration-300 rounded-xl"
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
            >
                Agregar
            </button>
            )}

            {botonDisponible && (
                <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => handleClickProductoAgotado(producto.id)}
            >
                Producto Agotado
            </button>

            )}
        </div>

    </div>

  )
}
