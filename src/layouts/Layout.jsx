import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Sidebar';
import useQuiosco from '../hooks/useQuiosco';
import ModalProducto from '../components/ModalProducto';
import { useAuth } from '../hooks/useAuth';
import stylesSigned from '../styles/navSigned.module.css';
import { Link } from 'react-router-dom';
import Colores from '../components/Colores';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';

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

Modal.setAppElement('#root');

export default function Layout() {
  const { user, error, logout } = useAuth({ middleware: 'auth' });
  const { modal } = useQuiosco();

  console.log(user);
  console.log(error);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    // Puedes manejar los resultados de búsqueda aquí, por ejemplo, mostrando una lista desplegable
    console.log(results);
  };

  return (
    <>
      <main className={stylesSigned.app_container}>
        <div className={stylesSigned.navegacion}>
          <h1 className={stylesSigned.title}>
            <Link to="/">
              <img className={stylesSigned.logo} src="../img/logo2.png" alt="LevelUp Access logo" />
            </Link>
            LevelUp <span className={stylesSigned.rojo}>Access</span>
          </h1>

          <div className={stylesSigned.buscar_container}>
            <i className={`fas fa-search lupa ${stylesSigned.lupa}`} />
            <SearchBar 
              onSearchResults={handleSearchResults}
            />
          </div>

          <ul className={stylesSigned.iconos_menu}>
            <li><Link to="/Favoritos"><i className={`fas fa-heart ${stylesSigned.icono_corazon}`}></i></Link></li>
            <Link to="/carrito">
              <li><a href="#"><i className={`fas fa-shopping-cart ${stylesSigned.icono_carrito}`}></i></a></li>
            </Link>
          </ul>

          <ul className={stylesSigned.cuenta_menu}>
          <li>
            <button type="button" onClick={logout}>
              <img 
                src="../img/logout.png" 
                alt="Icono de puerta" 
                className={`${stylesSigned.small_icon} ${stylesSigned.icono_corazon}`} 
              />
            </button>
          </li>
          <Link to="/perfil">
          <li className="">
            <img 
              src="../img/perfilUsuario.png" 
              alt="Icono de perfil" 
              className={`${stylesSigned.small_icon} ${stylesSigned.icono_corazon}`} 
            />
          </li>
        </Link>

        </ul>

        </div>

        <div className='md:flex'>
          <Sidebar />
          <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
            <Outlet />
            <Colores />
          </main>
        </div>
      </main>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer className={stylesSigned.toast_container} />
    </>
  );
}