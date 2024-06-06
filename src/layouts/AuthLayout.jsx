import {Outlet} from 'react-router-dom'
import{Link} from 'react-router-dom'
import styles from '../nav.module.css'; // Importa los estilos CSS


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


      <div className={styles.ayuda}>
        <a href="#">
          <img src="../img/paleta.png" alt="Icono de ayuda" />
        </a>
      </div>

        {/* <img 
        src = '../img/logo.svg' 
        alt='Imagen del logo' 
        className='max-w-xs'>
            
        </img> */}

        <div className>
            <Outlet/>
        </div>
    </main>
  )
}
