import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import stylesCarrito from '../styles/carrito.module.css'; // Importa los estilos
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import useQuiosco from '../hooks/useQuiosco'
import Modal from 'react-modal'
import ModalProducto from '../components/ModalProducto'
import { ToastContainer } from 'react-toastify'

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

export default function Nav() {

  const { user, error, logout } = useAuth({ middleware: 'auth' })
  const { modal } = useQuiosco()

  return (


    <>
      <main>
        <div className={stylesCarrito.navegacion}>
          <h1 className={stylesCarrito.title}>
            <Link to="/">
              <img className={stylesCarrito.logo} src="../img/logo2.png" alt="LevelUp Access logo" />
            </Link>
            LevelUp <span className={stylesCarrito.rojo}>Access</span>
          </h1>

          {/* <div className={stylesCarrito.buscar_container}>
                <i className={`fas fa-search lupa ${stylesCarrito.lupa}`} />
                <input type="text" className={stylesCarrito.buscar_barra} placeholder="Buscar"/>
            </div> */}

          <ul className={stylesCarrito.iconos_menu}>
            <li className=""><Link to="/favoritos"><i className={`fas fa-heart ${stylesCarrito.icono_corazon}`}></i></Link></li>
            <Link to="/carrito">
              <li className=""><a href="#"><i className={`fas fa-shopping-cart ${stylesCarrito.icono_carrito}`}></i></a></li>
            </Link>
          </ul>
          <div className='pt-2'>
            <ul className={stylesCarrito.cuenta_menu}>
              <li>
                <button type="button" onClick={logout}>
                  <img
                    src="../img/logout.png"
                    alt="Icono de puerta"
                    className={`${stylesCarrito.small_icon} ${stylesCarrito.icono_corazon}`}
                  />
                </button>
              </li>

              <Link to="/perfil">
                <li className="">
                  <img
                    src="../img/perfilUsuario.png"
                    alt="Icono de perfil"
                    className={`${stylesCarrito.small_icon} ${stylesCarrito.icono_corazon}`}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* OUTLET ES LA CONEXION DE LAS RUTAS DEL ROUTER, AUN ESTOY BATALLANDO PA ENTENDER ESTA COSA */}
        <Outlet />




        <div className={stylesCarrito.ayuda}>
          <a href="#">
            <img src="../img/paleta.png" alt="Icono de ayuda" />
          </a>
        </div>

        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto></ModalProducto>
        </Modal>


        <ToastContainer></ToastContainer>


      </main>
    </>



  )
}
