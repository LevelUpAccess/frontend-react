import React, { useState } from 'react';
import{Link} from 'react-router-dom'
import loginStyles from '../login.module.css'; // Importa los estilos CSS


export default function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    //Para evitar meter codigo html vacio que no sirve de nada, lo mejor es meter una etiqueta vacia, la cual se le conoce como frag
    <>
        {/* <h1 className="text-4xl font-black">Inicia Sesión en LevelUp Access</h1>
        <p>Para comprar un videojuego debes iniciar sesión</p> */}

        <div className="">
            <form action="">
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
                        className={`${loginStyles.btn_sesion} ${loginStyles.btn_sesionEstetica}`}
                    />

                    <nav className={`${loginStyles.crear_cuenta} ${loginStyles.crear_cuentaEstetica}`}>
                        <Link to="/auth/registro">
                            ¿No tienes cuenta? Crea una
                        </Link>
                    </nav>
                </div> {/* ESTE ES EL DIV DEL BODY*/}
            </form>
        </div>

        
        {/* <h1 className="text-4xl font-black">Inicia Sesión en LevelUp Access</h1>
        <p>Para comprar un videojuego debes iniciar sesión</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="email"
                    >Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Dirección de correo electrónico"
                    />
                </div>



                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password"
                    >Contraseña:</label>
                    <input 
                        type="password" 
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Password" 
                    />
                </div>

                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    className="bg-[#ef3340] hover:bg-[#8a0808]
                    text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
                
            </form>
        </div> */}

    
    </>
  )
}

// Un componente es una funcion, y una funcion es reutilizable, una funcion debe de ser creada para cierto proposito, de la misma forma un componente, un componente es reutilizable, y tambien tiene un proposito, pero tanbien muestran informacion.