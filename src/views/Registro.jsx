export default function Registro() {
  return ( //ESTO SOLO PUEDE RETORNAR UN SOLO ELEMENTO

    //Para evitar meter codigo html vacio que no sirve de nada, lo mejor es meter una etiqueta vacia, la cual se le conoce como frag
    <>
        <h1 className="text-4xl font-black">Crea tu cuenta en LevelUp Access</h1>
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
    </>
  )
}
