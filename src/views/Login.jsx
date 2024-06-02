import { createRef, useState} from 'react' 
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth'

export default function Login() {

    //Creando referencias para cada uno de los campos del formulario.
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([])

    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

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
        <h1 className="text-4xl font-black">Inicia Sesión en LevelUp Access</h1>
        <p>Para comprar un videojuego debes iniciar sesión</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
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

                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    className="bg-[#ef3340] hover:bg-[#8a0808]
                    text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
                
            </form>
        </div>

        <nav className="mt-5 ">
            <Link to="/auth/registro">
                ¿No tienes cuenta? Crea una
            </Link>
        </nav>
    </>
  )
}

// Un componente es una funcion, y una funcion es reutilizable, una funcion debe de ser creada para cierto proposito, de la misma forma un componente, un componente es reutilizable, y tambien tiene un proposito, pero tanbien muestran informacion.