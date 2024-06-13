import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";
import stylesResumen from '../styles/resumen.module.css'; // Importa los estilos

export default function Favoritos() {

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
          <h2 className={stylesResumen.carro_texto}>Favoritos</h2>
      </div>
      {/* <p className="text-lg my-5">Aqui podras ver el resumen y totales de tu pedido</p> */}


      <div className={stylesResumen.productos_container}>
        <div className= {stylesResumen.juegos_container}>
          {pedido.length === 0 ? (
            
            
            <div className="text-center text-2xl text-white bg-[#171717] rounded-xl p-4">
              <div className="imagen_dinosaurio mb-4">
                <video 
                  src="../img/dinosaurio.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  className={stylesResumen.dinosaurio} 
                  />
          
              </div>
            </div>
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
      </div> {/* ESTE ES EL DIV QUE DA CIERRE A PRODUCTOS CONTAINER  */}
    </aside>
  )
}
