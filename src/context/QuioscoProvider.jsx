import { createContext, useState } from 'react'
import { categorias as categoriasDB} from "../data/categorias"


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {



    // [Nombre del estate, funcion del estate(Set)]
    const [categorias, setCategorias] = useState(categoriasDB);
    const[categoriaActual, setCategoriaActual] = useState(categorias[0])

    console.log(categorias)

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext