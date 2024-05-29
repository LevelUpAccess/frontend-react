
//useState es un hook incluido en react y es el mas utilizado, puede ser para estados variables, el estado cambia. cambia de acuerdo a ciertas acciones, solo se colocan en state las partes mas dinamicas de la pagina
import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';


//EL PROVIDER ES UN FUNCION, PUEDE SER UN ARROW FUNCTION, Y SIEMPRE RETORNA ALGO

//ESTE CONTEXT VA A TENER ACCESO A UN METODO LLAMADO PROVIDER
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {




    //AQUI ESTAMOS GENERANDO STATES

    // [Nombre del estate, funcion del estate(Set)]
    const [categorias, setCategorias] = useState([]);
    //Categoria actual
    const[categoriaActual, setCategoriaActual] = useState({})
    const[modal, setModal] = useState(false)
    const[producto, setProducto] = useState(false)
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])


    //Se trae la respuesta tipo json de laravel del nombre de la categoria y su icono
    const obtenerCategorias = async () => {
        try{

            //Variable de entorno local
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/api/categorias`);

            
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])


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
                            //Aqui hacemos una discriminacion
                            //ya que no queremos ni la
                            //categoria, solo el
                            //producto
    const handleAgregarPedido = ({categoria_id, ...producto}) =>{
        //REVISA SI UN ELEMENTO YA EXISTE EN EL ARREGLO, O ACTUALIZAMOS LA CANTIDAD QUE EL USUARIO DESEE
        if(pedido.some( pedidoState => pedidoState.id === producto.id )) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === 
            producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
        }else{
            //Lo que haya en el pedido
            setPedido([...pedido, producto])
            toast.success('Agreado al pedido')
        }
    }

    const handleEditarCantidad = id =>{
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]      
        setProducto(productoActualizar)  
        setModal(!modal);
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del pedido')
    }

    //Esto demuestra que la categoria actual es un objeto, y cuando presionamos click nos manda un arreglo
    //console.log(categoriaActual)

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
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext