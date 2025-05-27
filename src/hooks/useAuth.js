import { useEffect, useState } from 'react'; // Importa useState
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';

export const useAuth = ({ middleware, url }) => {

  const token = localStorage.getItem('AUTH_TOKEN')
  const navigate = useNavigate();

  const [authLoading, setAuthLoading] = useState(false); // Estado para controlar el loading del hook

  const { data: user, error, mutate, isLoading: swrLoading } = useSWR('/api/user', () =>
    clienteAxios('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.data)
      .catch(error => {
        throw Error(error?.response?.data?.errors)
      })
  )

  const login = async (datos, setErrores) => {
    setAuthLoading(true); // Activa el loading antes de la petición
    try {
      const { data } = await clienteAxios.post('/api/login', datos)
      localStorage.setItem('AUTH_TOKEN', data.token);
      setErrores([]);

      // await mutate() forzaría la revalidación y esperaría, pero luego
      // el useEffect se encargaría de la navegación.
      // Para controlar el spinner aquí, es mejor NO hacer await mutate() aquí.
      mutate(); // Solo inicia la revalidación, no la espera.

      // La redirección y el apagado del spinner se gestionarán en el useEffect
      // una vez que 'user' se actualice.

    } catch (error) {
      setErrores(Object.values(error.response.data.errors))
      setAuthLoading(false); // Desactiva el loading en caso de error
    }
  }

  const registro = async (datos, setErrores) => {
    setAuthLoading(true); // Activa el loading antes de la petición
    try {
      const { data } = await clienteAxios.post('/api/registro', datos)
      localStorage.setItem('AUTH_TOKEN', data.token);
      setErrores([]);

      mutate(); // Inicia la revalidación de user, pero no la espera.

      // La redirección y el apagado del spinner se gestionarán en el useEffect.

    } catch (error) {
      setErrores(Object.values(error.response.data.errors))
      setAuthLoading(false); // Desactiva el loading en caso de error
    }
  }

  const logout = async () => {
    setAuthLoading(true); // Opcional: activar loading para logout también
    try {
      await clienteAxios.post('/api/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem('AUTH_TOKEN')
      await mutate(undefined) // Espera la invalidación de SWR
      setAuthLoading(false); // Desactiva el loading al finalizar logout
    } catch (error) {
      setAuthLoading(false); // Desactiva el loading en caso de error
      throw Error(error?.response?.data?.errors)
    }
  }

  useEffect(() => {
    // console.log("useEffect - user:", user, "error:", error, "authLoading:", authLoading);

    // Si estamos en una ruta 'guest' y el usuario se ha cargado (existe)
    // y el authLoading está activo (significa que venimos de login/registro exitoso)
    if (middleware === 'guest' && url && user && authLoading) {
      console.log("Redirigiendo a:", url);
      navigate(url);
      // Desactiva el loading justo después de iniciar la navegación.
      // Puede que quieras un pequeño setTimeout aquí si la nueva página es muy pesada.
      setTimeout(() => setAuthLoading(false), 300); // Pequeño delay
    }
    // Caso específico para admin
    if (middleware === 'guest' && user && user.admin && authLoading) {
      console.log("Redirigiendo a /admin (admin)");
      navigate('/admin');
      setTimeout(() => setAuthLoading(false), 300);
    }
    // Caso para usuarios no admin en ruta admin
    if (middleware === 'admin' && user && !user.admin && authLoading) {
      console.log("Redirigiendo a / (no admin)");
      navigate('/');
      setTimeout(() => setAuthLoading(false), 300);
    }
    // Manejo de errores de autenticación
    if (middleware === 'auth' && error) {
      console.log("Redirigiendo a /auth/bienvenida (error auth)");
      navigate('/auth/bienvenida');
      setTimeout(() => setAuthLoading(false), 300);
    }

    // Si hay un usuario pero el loading está activo (ej: al cargar la página por primera vez
    // y useSWR está buscando el usuario, o después de un logout)
    // Esto es para que el spinner se apague si no hay redirección inminente.
    if (user && authLoading && !swrLoading) {
      // Si user ya cargó y no estamos redirigiendo activamente con el authLoading, apagarlo.
      // Esto previene que el spinner se quede pegado si el useEffect no redirige por alguna razón.
      // Considera con cuidado esta condición para evitar parpadeos no deseados.
      // setAuthLoading(false); 
    }

    // Si NO hay token, user es null, y no hay error, y no estamos en authLoading de SWR
    // Asegúrate de que el spinner no se quede si no hay sesión iniciada y la página no requiere auth
    if (!token && !user && !error && !swrLoading && authLoading) {
      setAuthLoading(false);
    }

  }, [user, error, middleware, url, navigate, authLoading, swrLoading]) // Añade authLoading y swrLoading a las dependencias

  // console.log(user)

  return {
    login,
    registro,
    logout,
    user,
    error,
    authLoading // Exporta el nuevo estado de loading
  }
}
