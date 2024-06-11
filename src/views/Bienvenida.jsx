import bienvenidaStyles from '../styles/bienvenida.module.css'; // Importa los estilos CSS

export default function Bienvenida() {
  return (
    <div>
        <div className="slides">
            <div className={`${bienvenidaStyles.slide} ${bienvenidaStyles.slide_1}`}>
                <img src="../img/cod.jpg" alt=""/>
            </div>
            <div className={`${bienvenidaStyles.slide} ${bienvenidaStyles.slide_2}`}>
                <img src="../img/mine-banner.png" alt=""/>
            </div>
            <div className={`${bienvenidaStyles.slide} ${bienvenidaStyles.slide_3}`}>
                <img src="../img/fondo-acceder.jpg" alt=""/>
            </div>
            <div className={`${bienvenidaStyles.slide} ${bienvenidaStyles.slide_4}`}>
                <img src="../img/r6-banner.jpeg" alt=""/>
            </div>
            <div className={`${bienvenidaStyles.slide} ${bienvenidaStyles.slide_5}`}>
                <img src="../img/zomboid.jpg" alt=""/>
            </div>
        </div>

        <div className={bienvenidaStyles.texto_container}>
            <h2 className="bienvenida-texto">
                Descubre lo que LevelUp Access tiene para ti, lo mejor <br/> está por venir!
            </h2>
            <a href="views/iniciar-sesion.html" className={bienvenidaStyles.empezar_boton}>
                Empezar
            </a>
        </div>
      
    </div>
  )
}
