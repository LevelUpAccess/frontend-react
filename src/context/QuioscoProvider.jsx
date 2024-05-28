
//useState es un hook incluido en react y es el mas utilizado, puede ser para estados variables, el estado cambia. cambia de acuerdo a ciertas acciones, solo se colocan en state las partes mas dinamicas de la pagina
import { createContext, useState } from 'react'
import { categorias as categoriasDB} from "../data/categorias"

//EL PROVIDER ES UN FUNCION, PUEDE SER UN ARROW FUNCTION, Y SIEMPRE RETORNA ALGO

//ESTE CONTEXT VA A TENER ACCESO A UN METODO LLAMADO PROVIDER
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {




    //AQUI ESTAMOS GENERANDO STATES

    // [Nombre del estate, funcion del estate(Set)]
    const [categorias, setCategorias] = useState(categoriasDB);
    //Categoria actual
    const[categoriaActual, setCategoriaActual] = useState(categorias[0])
    const[modal, setModal] = useState(false)
    const[producto, setProducto] = useState(false)



    //Funcion para cambiar de categoria: (cuando en react hay un click-interaccion, tiene que iniciar con handle) 
    const handleClickCategoria = id => {
        // console.log(id)                 //esta variable categoria es interna de este FILTER(TENLO EN CUENTA)
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria); //Esto hace que ya diga arriba cual es la categoria jeje
        // console.log(categoria)
    }

    //FUNCION CON MODAL
    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto =>{
        setProducto(producto)
    }

    //Esto demuestra que la categoria actual es un objeto, y cuando presionamos click nos manda un arreglo
    console.log(categoriaActual)

    // console.log(categorias)


    //SIEMRPE LO QUE RETURNES, ES LA PARTE DE LA PRESENTACION, VAN A SER VARIABLES O FUNCIONES QUE COLOQUES EN ESTE PROVIDER
    return (
        <QuioscoContext.Provider
            value={{
                //Aqui es donde hago disponible las constantes de arriba, ya que si las declaro y no meto aqui, no van a jalar
                categorias,
                categoriaActual, 
                handleClickCategoria,
                modal, //Esta la vamos a consumir en un componente
                handleClickModal, // Y esta la vamos a consumir en producto, porque es donde esta la opcion "agregar"
                producto, 
                handleSetProducto
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext