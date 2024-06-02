import { createRef, useState} from 'react' 
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

export default function Registro() {

    //Creando referencias para cada uno de los campos del formulario.
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])


    //Dentro del handleSubmit, accedes a los valores de los inputs ingreados por el usuario a través de las referencias vinculadas para manipular los datos.
    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        try{
            const {data} = await clienteAxios.post('/api/registro', datos)
            console.log(data.token)
            setErrores([])
        } catch (error){
            setErrores(Object.values(error.response.data.errors))
        }
        
    }

    return ( //ESTO SOLO PUEDE RETORNAR UN SOLO ELEMENTO

    //Para evitar meter codigo html vacio que no sirve de nada, lo mejor es meter una etiqueta vacia, la cual se le conoce como frag
    <>
        <h1 className="text-4xl font-black">Crea tu cuenta en LevelUp Access</h1>
        <p>Crea tu cuenta llenando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

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
                        ref={nameRef}//Al asignar la referencia a cada input, React vincula cada referencia con el elemento del DOM correspondiente.
                    />
                </div>
                {/* No sabia que asi se ponian los comentarios aqui, que jalada */}

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
                        ref={emailRef}
                    />
                </div>

                {/* Campo para el password */}

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
                        ref={passwordRef}
                    />
                </div>

                {/* Campo para confirmar contraseña */}

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
                        ref={passwordConfirmationRef}
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
        </nav>
    </>
  )
}
