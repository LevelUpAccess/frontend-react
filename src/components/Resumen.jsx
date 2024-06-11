import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";
import stylesResumen from '../styles/resumen.module.css'; // Importa los estilos

export default function Resumen() {

  const {pedido, total, handleSubmitNuevaOrden} = useQuiosco();
  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevaOrden();
  }
  // console.log(comprobarPedido())

  return (
    <aside className="">
      <div className={stylesResumen.texto_carro_container}>
          <h2 className={stylesResumen.carro_texto}>Mi carrito</h2>
      </div>
      {/* <p className="text-lg my-5">Aqui podras ver el resumen y totales de tu pedido</p> */}


      <div className={stylesResumen.productos_container}>
        <div className= {stylesResumen.juegos_container}>
          {pedido.length === 0 ? (
              <p className="text-center text-2xl font-white">
                No hay elementos en tu pedido aún
              </p>
          ) : (
            pedido.map(producto => (
              <ResumenProducto
                key={producto.id}
                producto = {producto}
                // className = {stylesResumen.juego_container}
              />
            ))
          )}
        </div>

        <div className={stylesResumen.total_container}>
          <h1 className={stylesResumen.titulo_total}>Resumen de juegos y aplicaciones</h1>
          
          {/* ESTO NI SE ESTA USANDO */}
          <div className={stylesResumen.total_datos}>
            {/* <h1>Precio</h1> */}
            <h1 className={stylesResumen.precio_total}>$824MXN</h1>
          </div>
          {/* AQUI TERMINA LO QUE NI SE ESTA USANDO */}

          <div className={stylesResumen.total_datos}>
            <h1>Impuestos</h1>
            <h1 className={stylesResumen.imp}><span>Al finalizar la compra</span></h1>
          </div>

          {/* UNA RAYA */}
          <div className={stylesResumen.raya}></div>

          <p className="text-xl mt-10 text-white">
            Total: {''}
            {formatearDinero(total)}
          </p>

          <form 
              className="w-full"
              onSubmit={handleSubmit}
          >

            <div className="mt-5">
              <input
                  type="submit"
                  className={`${comprobarPedido()? 
                    'bg-indigo-100' : 
                    'bg-[#036EEC] hover:bg-indigo-800 '}
                    
                    px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                  value="CONFIRMAR COMPRA"
                  disabled= {comprobarPedido()}
              />

            </div>
          </form>

        </div>

      </div> {/* ESTE ES EL DIV QUE DA CIERRE A PRODUCTOS CONTAINER  */}
      

    </aside>
  )
}
