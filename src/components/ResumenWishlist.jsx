import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import stylesWish from '../styles/wishlist.module.css';

export default function ResumenWishlist({ producto }) {
  const { handleEliminarProductoWishlist } = useQuiosco();
  const { id, imagen, nombre, precio } = producto;

  return (
    <div className="">
      <div className={stylesWish.juego_container}>
        <div className={stylesWish.portada_videojuego}>
          <img src={`/img/${imagen}.jpg`} alt={`Imagen de ${nombre}`} className={stylesWish.portada_img} />
        </div>

        <div className={stylesWish.precio_container}>
          <div className={stylesWish.primer_linea}>
            <p className={stylesWish.juego_base}>Juego base</p>
            <p className={stylesWish.precio_juego}>Precio: {formatearDinero(precio)}</p>
          </div>

          <div className={stylesWish.titulo_container}>
            <h1 className={stylesWish.titulo_juego}>{nombre}</h1>
          </div>

          <div className={stylesWish.botones_container}>
            <button
              type="button"
              className="bg-red-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
              onClick={() => handleEliminarProductoWishlist(id)}
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
