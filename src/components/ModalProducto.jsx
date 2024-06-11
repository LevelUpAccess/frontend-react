import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";

export default function ModalProducto() {

    const { producto, handleClickModal, handleAgregarPedido, pedido} = useQuiosco();

    //creamos un state de aqui porque nomas lo vamos a usar aqui: 
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);
    

    //NO SE BIEN COMO JALA ESTA FREGADA, ES PARA HACER QUE NO SE PUEDAN METER DOS DEL MISMO EN EL CARRITO, PERO OCUPO VER EL VIDEO OTRA VEZ SIN SUEÑO
    useEffect(() =>{
        if(pedido.some( pedidoState => pedidoState.id === producto.id )) {
            const productoEdicion = pedido.filter(pedidoState => pedidoState.id === 
            producto.id)[0]

            setCantidad(productoEdicion.cantidad)
            setEdicion (true);
        }

    }, [pedido])

    // console.log(producto)


  return (
    <div className="md:flex gap-10 ">
        <div className="md:w-1/3">
            <img 
                alt={`Imagen Producto ${producto.nombre}`} 
                src={`/img/${producto.imagen}.jpg`}
                style={{ width: '600px',  height: '400px', }}
            />

        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

            </div>

            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>

            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatearDinero(producto.precio)}
            </p>

            <div className="flex gap-4 mt-5">

                {/* Boton de menos */}
                <button
                    type="button"
                    onClick={() => {
                        if (cantidad <= 1) return
                        setCantidad(cantidad - 1);
                    }}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <p className="text-3xl">
                    {cantidad}
                </p>

                {/* Boton de mas */}
                <button
                    type="button"
                    onClick={() => {
                        if (cantidad >= 5) return
                        setCantidad(cantidad + 1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>

            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                                            //Aqui mezclamos el producto con la cantidad, ya que la cantidad
                                            //no es parte del arreglo, pero de esta forma los metemos en la 
                                            // misma bolsa
                onClick={() =>{
                    handleAgregarPedido({...producto, cantidad})
                    handleClickModal()
                }}
            >
                {edicion ? 'Guardar Cambios' : 'Agregar al pedido'}

            </button>


        </div>

    </div>
  )
}
