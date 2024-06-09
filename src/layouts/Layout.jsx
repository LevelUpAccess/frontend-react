import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'
import { useAuth } from '../hooks/useAuth'
import stylesSigned from '../styles/navSigned.module.css'; // Importa los estilos
import{Link} from 'react-router-dom'


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

// Los componentes van en mayuscula como si fueran clases

//Si lo ves con mayusculas al inicio es un buen indicativo de que es un componente, si lo ves con "use", eso muy probablemente sea un hook, y un hook es una funcion.

//Los componentes se mandan llamar de esta manera: <componente/>

//Los hooks son funciones que mandas llamar con un parentesis.

export default function Layout() {

  const {user, error, logout} = useAuth({middleware: 'auth'})
  const {modal} = useQuiosco()


  console.log(user)
  console.log(error)
  // console.log(modal)

  return (
    <>
      <main>

      <div className={stylesSigned.navegacion}>
          <h1 className={stylesSigned.title}>
              <Link to="#">
                <img className={stylesSigned.logo} src="../img/logo2.png" alt="LevelUp Access logo"/>
              </Link>
              LevelUp <span className={stylesSigned.rojo}>Access</span>
          </h1>

          <div className={stylesSigned.buscar_container}>
            <i className={`fas fa-search lupa ${stylesSigned.lupa}`} />
            <input type="text" className={stylesSigned.buscar_barra} placeholder="Buscar"/>
          </div>

          <ul className={stylesSigned.iconos_menu}>        
            <li className=""><a href="#"><i className={`fas fa-heart ${stylesSigned.icono_corazon}`}></i></a></li>
            <li className=""><a href="#"><i className={`fas fa-shopping-cart ${stylesSigned.icono_carrito}`}></i></a></li>
          </ul>

          <ul className={stylesSigned.cuenta_menu}>        
            {/* <li className=""><a href="#"><i className="fas fa-door-open"></i></a></li> */}
            <button type="button" className="fas fa-door-open" onClick={logout}/>
          </ul>

      </div>
          <div className='md:flex'>
            <Sidebar/>
            <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
            {/* OUTLET ES LA CONEXION DE LAS RUTAS DEL ROUTER, AUN ESTOY BATALLANDO PA ENTENDER ESTA COSA */}
              <Outlet/>

              <div className={stylesSigned.ayuda}>
                <a href="#">
                  <img src="../img/paleta.png" alt="Icono de ayuda" />
                </a>
              </div>
            </main>
            
            <Resumen/>
          </div> 
        </main>

          <Modal isOpen = {modal} style={customStyles}>
            <ModalProducto></ModalProducto>
          </Modal>


          <ToastContainer></ToastContainer>
    </>
  )
}
