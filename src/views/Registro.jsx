import { createRef, useState} from 'react' 
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';
import registroStyles from '../styles/register.module.css'; // Importa los estilos CSS

export default function Registro() {

    //Creando referencias para cada uno de los campos del formulario.
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {registro} = useAuth({middleware: 'guest', url: '/'})

    //Dentro del handleSubmit, accedes a los valores de los inputs ingreados por el usuario a través de las referencias vinculadas para manipular los datos.
    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        
        registro(datos, setErrores)
    }

    //TOOGLE PASSWORD

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [passwordVisibleConf, setPasswordVisibleConf] = useState(false);


    const togglePassword = () => {
      setPasswordVisible(!passwordVisible);
    };

    const togglePasswordConf = () => {
        setPasswordVisibleConf(!passwordVisibleConf);
    };

    return ( //ESTO SOLO PUEDE RETORNAR UN SOLO ELEMENTO

    //Para evitar meter codigo html vacio que no sirve de nada, lo mejor es meter una etiqueta vacia, la cual se le conoce como frag
    <>
        <div className="">
            <form action="" onSubmit={handleSubmit} noValidate>
                <div className={`${registroStyles.container_form} ${registroStyles.body}`}>
                    <div className={registroStyles.logo_form}>
                        <img src="../img/logo2.png" alt="Logo LevelUpAccess"/>
                    </div>

                    <div className="texto_iniciar">
                        <h2 className={registroStyles.textoInicia}>Regístrate en LevelUp Access</h2>
                    </div>

                    <div className={registroStyles.inputs}>
                        <div className="mb-4">
                            {/* <label
                                className="text-slate-800"
                                htmlFor="name"
                            > </label> */}
                            <input 
                                type="text" 
                                id="name"
                                className={registroStyles.nombre}
                                name="name"
                                placeholder="Nombre"
                                ref={nameRef}//Al asignar la referencia a cada input, React vincula cada referencia con el elemento del DOM correspondiente.
                            />
                        </div>
                        {/* No sabia que asi se ponian los comentarios aqui, que jalada */}

                        <div className="mb-4">
                            {/* <label
                                className="text-slate-800"
                                htmlFor="email"
                            > </label>  */}
                            <input 
                                type="email" 
                                id="email"
                                className={registroStyles.correo}
                                name="email"
                                placeholder="Dirección de correo electrónico"
                                ref={emailRef}
                            />
                        </div>

                        {/* Campo para el password */}

                        <div className="mb-4">
                            {/* <label
                                className="text-slate-800"
                                htmlFor="password"
                            > </label> */}
                            <input 
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                className={registroStyles.password}
                                name="password"
                                placeholder="Password"
                                ref={passwordRef}
                            />
                        </div>

                        {/* Toogle password */}

                        <span className={registroStyles.toggle_password} onClick={togglePassword}>
                            <img
                                src={passwordVisible ? "../img/ojo.png" : "../img/visible.png"}
                                alt="Mostrar contraseña"
                                id="eyeIcon"
                            />
                            
                        </span>

                        {/* Campo para confirmar contraseña */}

                        <div className="mb-4">
                            {/* <label
                                className="text-slate-800"
                                htmlFor="password_confirmation"
                            > </label> */}
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password_confirmation"
                                className={registroStyles.password}
                                name="password_confirmation"
                                placeholder="Confirmar password"
                                ref={passwordConfirmationRef}
                            />
                        </div>

                        <span className={registroStyles.toggle_password} onClick={togglePasswordConf}>
                        </span>
                    </div>
                    
                    <input 
                        type="submit" 
                        value="Crear Cuenta"
                        className={`${registroStyles.btn_sesion} ${registroStyles.btn_sesionEstetica}`}
                    />

                    <nav className={`${registroStyles.crear_cuenta} ${registroStyles.crear_cuentaEstetica}`}>
                        <Link to="/auth/login">
                            ¿Ya eres miembro? Inicia sesión
                        </Link>
                    </nav>

                </div> {/* ESTE ES EL DIV DEL BODY*/} 
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
            </form>
        </div>
    </>
  )
}
