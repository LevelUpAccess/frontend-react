import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import registroStyles from '../register.module.css'; // Importa los estilos CSS


export default function Registro() {

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
            <form action="">
                <div className={`${registroStyles.container_form} ${registroStyles.body}`}>
                    <div className={registroStyles.logo_form}>
                        <img src="../img/logo2.png" alt="Logo LevelUpAccess"/>
                    </div>

                    <div className="texto_iniciar">
                        <h2 className={registroStyles.textoInicia}>Registrate en LevelUp Access</h2>
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
            </form>

        </div>



        {/* SEPARACION DE LA VERSION COMENTADA */}


        {/* <h1 className="text-4xl font-black">Crea tu cuenta en LevelUp Access</h1>
        <p>Crea tu cuenta llenando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input 
                        type="text" 
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Nombre"
                    />
                </div>

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

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password_confirmation"
                    >Confirmar contraseña:</label>
                    <input 
                        type="password" 
                        id="password_confirmation"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        placeholder="Confirmar password"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className="bg-[#ef3340] hover:bg-[#8a0808]
                    text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
                
            </form>

        </div>

        <nav className="mt-5 ">
            <Link to="/auth/login">
                ¿Ya eres miembro? Inicia sesión
            </Link>
        </nav> */}
    </>
  )
}
