import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
import Carrito from './views/Carrito'
import Bienvenida from './views/Bienvenida'
import Favoritos from './views/Favoritos'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>, 
        // Que es children, basicamente va a ser lo que este definido aqui como sus hijos, van a utlizar <Layout/>
        children: [
            {
                index: true, 
                element: <Inicio/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                // index: true,
                path: '/auth/bienvenida',
                element: <Bienvenida/>
            },
            {
                // index: true,
                path: '/auth/login',
                element: <Login/>
            },
            {
                // index: true,
                path: '/auth/registro',
                element: <Registro/>
            }
        ]

    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    },

    {
        path: '/carrito',
        children: [
            {
                index: true,
                element: <Carrito />
            }
        ]
    },

    {
        path: '/favoritos',
        children: [
            {
                index: true,
                element: <Favoritos />
            }
        ]
    }

])

export default router