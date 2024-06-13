import { createRef, useState} from 'react' 
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import { useAuth } from '../hooks/useAuth'
import loginStyles from '../styles/login.module.css'; // Importa los estilos CSS

export default function Login() {

    //Creando referencias para cada uno de los campos del formulario.
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([])

    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    //Toogle password
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
      setPasswordVisible(!passwordVisible);
    };

    //Dentro del handleSubmit, accedes a los valores de los inputs ingreados por el usuario a través de las referencias vinculadas para manipular los datos.
    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        
        login(datos, setErrores)
        
    }

    return (
    //Para evitar meter codigo html vacio que no sirve de nada, lo mejor es meter una etiqueta vacia, la cual se le conoce como frag
    <>
        <div className="">
            <form onSubmit={handleSubmit} noValidate>
                <div className={`${loginStyles.container_form} ${loginStyles.body}`}>
                    <div className={loginStyles.logo_form}>
                        <img src="../img/logo2.png" alt="Logo LevelUpAccess"/>
                    </div>

                    <div className="texto_iniciar">
                        <h2 className={loginStyles.textoInicia}>Inicia Sesión en tu cuenta de LevelUp Access</h2>
                    </div>

                    <div className={loginStyles.inputs}>
                        <div className="mb-4">
                            <input 
                                type="email" 
                                id="email"
                                className={loginStyles.correo}
                                name="email"
                                placeholder="Dirección de correo electrónico"
                                ref={emailRef}
                            />
                        </div>

                        {/* Campo para el password */}

                        <div className="">
                            {/* <label
                                className=""
                                htmlFor="password"
                            >Contraseña:</label> */}
                            <input 
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                className={loginStyles.password}
                                name="password"
                                placeholder="Password"
                                ref={passwordRef} 
                            />
                        </div> 

                        {/* Toogle password */}

                        <span className={loginStyles.toggle_password} onClick={togglePassword}>
                            <img
                                src={passwordVisible ? "../img/ojo.png" : "../img/visible.png"}
                                alt="Mostrar contraseña"
                                id="eyeIcon"
                            />
                        </span>
                    </div>

                    <input 
                        type="submit" 
                        value="Iniciar Sesión"
                        className={`${loginStyles.btn_sesion} cursor-pointer ${loginStyles.btn_sesionEstetica}`}
                    />

                    <nav className={`${loginStyles.crear_cuenta} ${loginStyles.crear_cuentaEstetica}`}>
                        <Link to="/auth/registro">
                            ¿No tienes cuenta? Crea una
                        </Link>
                    </nav>
                </div> {/* ESTE ES EL DIV DEL BODY*/}
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}  
            </form>
        </div>
    </>
  )
}

// Un componente es una funcion, y una funcion es reutilizable, una funcion debe de ser creada para cierto proposito, de la misma forma un componente, un componente es reutilizable, y tambien tiene un proposito, pero tanbien muestran informacion.