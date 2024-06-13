import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";
import stylesWish from '../styles/wishlist.module.css';
import ResumenWishlist from "./ResumenWishlist";

export default function Wishlist() {
  const { wishlist } = useQuiosco();

  return (
    <aside className="">
      <div className={stylesWish.texto_carro_container}>
        <h2 className={stylesWish.carro_texto}>Lista de deseos</h2>
      </div>

      <div className={stylesWish.productos_container}>
        <div className={stylesWish.juegos_container}>
          {wishlist.length === 0 ? (
            <div className="text-center text-2xl text-white bg-[#171717] rounded-xl p-4">
              <div className="imagen_dinosaurio mb-4">
                <video
                  src="../img/dinosaurio.mp4"
                  autoPlay
                  muted
                  loop
                  className={stylesWish.dinosaurio}
                />
              </div>
            </div>
          ) : (
            wishlist.map(producto => (
              <ResumenWishlist
                key={producto.id}
                producto={producto}
              />
            ))
          )}
        </div>

      </div>
        {wishlist.length === 0 && (
          <div className={stylesWish.container_nohay}>
            <p className={stylesWish.nohay}>No hay elementos en tu lista de deseos aún</p>
          </div>
        )}
    </aside>
  );
}
