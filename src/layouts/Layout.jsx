import { Outlet } from 'react-router-dom'

// Los componentes van en mayuscula como si fueran clases

//Si lo ves con mayusculas al inicio es un buen indicativo de que es un componente, si lo ves con "use", eso muy probablemente sea un hook, y un hook es una funcion.

//Los componentes se mandan llamar de esta manera: <componente/>

//Los hooks son funciones que mandas llamar con un parentesis.

export default function Layout() {
  return (
    <div>
      Layout

      <Outlet></Outlet>
    </div>
  )
}
