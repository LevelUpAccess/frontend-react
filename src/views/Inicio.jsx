import useSWR from 'swr'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'

export default function Inicio() {


  //Accedemos al value del QuioscoProvider
  const { categoriaActual } = useQuiosco()

  //consulta SWR
  const token = localStorage.getItem('AUTH_TOKEN');


  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval: 1000
  })

  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  if(isLoading) return 'Cargando...';

  //De esta forma filtramos jeje, que se muestre a lo que se haga clicl
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  // console.log(productos)

  return (
    <>
    <div className="bg-[#121212]">
      <h1 style={{ marginTop: '70px' }} className='text-5xl text-white'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10 text-white'>
        Elige y personaliza tu pedido a continuación.
      </p>

      <div className="grid gap-4 grid-cols01 md:grid-cols-2 xl:grid-cols-3 bg-[#121212]">

        {productos.map(producto =>(
          <Producto
          key={producto.imagen}
          producto={producto}
          botonAgregar={true}
          />
          ))}
      </div>
      </div>
    </>
  )
}


// Un componente es una funcion, y una funcion es reutilizable, una funcion debe de ser creada para cierto proposito, de la misma forma un componente, un componente es reutilizable, y tambien tiene un proposito, pero tanbien muestran informacion.