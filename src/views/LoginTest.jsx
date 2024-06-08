import React from 'react'

export default function testing() {
  return (
    <div>
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
            
            </div>
  )
}
