import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'
import { useAuth } from '../hooks/useAuth'

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

  const {user, error} = useAuth({middleware: 'auth'})
  const {modal} = useQuiosco()

  console.log(user)
  console.log(error)
  // console.log(modal)

  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
        {/* OUTLET ES LA CONEXION DE LAS RUTAS DEL ROUTER, AUN ESTOY BATALLANDO PA ENTENDER ESTA COSA */}
          <Outlet/>
        </main>
        <Resumen/>
      </div>

      <Modal isOpen = {modal} style={customStyles}>
        <ModalProducto></ModalProducto>
      </Modal>


      <ToastContainer></ToastContainer>



    </>
  )
}
