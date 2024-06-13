import Nav from "../components/Nav"
import Resumen from '../components/Resumen'
import Colores from "../components/Colores"
import Favoritos from "../components/Favoritos"

export default function Carrito() {
  return (
    <div>
      <Nav/>
        <Favoritos></Favoritos>  

      <Colores></Colores>
    </div>
  )
}
