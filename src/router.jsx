import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'

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
                path: '/auth/login',
                element: <Login/>
            },
            {
                // index: true,
                path: '/auth/registro',
                element: <Registro/>
            }
        ]

    }

])

export default router