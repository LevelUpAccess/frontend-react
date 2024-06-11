import {Outlet} from 'react-router-dom'
import{Link} from 'react-router-dom'
import styles from '../styles/nav.module.css'; // Importa los estilos CSS
import Colores from '../components/Colores';


export default function AuthLayout() {
  return (
    <main>

      <div className={styles.navegacion}>
        <h1 className={styles.title}>
          <Link to="#">
            <img className={styles.logo} src="../img/logo2.png" alt="LevelUp Access logo"/>
          </Link>
          LevelUp <span className={styles.rojo}>Access</span>
        </h1>
      </div>

      <Colores></Colores>

        <div className>
            <Outlet/>
        </div>
    </main>
  )
}