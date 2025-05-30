import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import stylesResumen from '../styles/resumen.module.css'; // Importa los estilos

export default function ResumenProducto({producto}) {

    // console.log(producto)
    const {handleEditarCantidad, handleEliminarProductoPedido} = useQuiosco()
    const {id, imagen, nombre, precio, cantidad} = producto 


    return (
        <div className="">
            <div className={stylesResumen.juego_container}>
                <div className={stylesResumen.portada_videojuego}>
                    <img src={`/img/${imagen}.jpg`} alt={`Imagen de ${nombre}`} className={stylesResumen.portada_img} />   
                </div>

                <div className={stylesResumen.precio_container}>
                    <div className={stylesResumen.primer_linea}>
                        <p className={stylesResumen.juego_base}>Juego base</p>
                        <p className={stylesResumen.precio_juego}>Precio: {formatearDinero(precio)}</p>
                    </div>

                    <div className={stylesResumen.titulo_container}>
                        <h1 className={stylesResumen.titulo_juego}>{nombre}</h1>
                    </div>

                    <p className="">Cantidad: {cantidad}</p>
                    <p className="">
                        Subtotal: {formatearDinero(precio * cantidad)}
                    </p>
                    
                    <div className={stylesResumen.botones_container}>
                        <button
                            type="button"
                            className="bg-sky-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
                            onClick={() => handleEditarCantidad(id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="bg-red-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
                            onClick={() => handleEliminarProductoPedido(id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}
