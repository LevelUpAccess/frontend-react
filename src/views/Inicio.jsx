import useSWR from 'swr';
import { useState } from 'react';
import Producto from '../components/Producto';
import useQuiosco from '../hooks/useQuiosco';
import clienteAxios from '../config/axios';
import SearchBar from '../components/SearchBar'; // Ajusta la ruta si es necesario
import stylesSigned from '../styles/navSigned.module.css';

export default function Inicio() {
  const { categoriaActual, categorias, handleClickCategoria } = useQuiosco();

  // Estado para los resultados de búsqueda
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const token = localStorage.getItem('AUTH_TOKEN');

  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data);

  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval: 1000
  });

  if (isLoading) return 'Cargando...';

  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);

  // Función para manejar los resultados de búsqueda
  const handleSearchResults = (results) => {
    setSearchResults(results.data);
    setIsSearching(results.data.length > 0);
  };

  // Mostrar productos según el estado de búsqueda
  const productosParaMostrar = isSearching ? searchResults : productos;

  return (
    <>
      <div className="bg-[#121212]">
        <div className={stylesSigned.buscar_container}>
          <i className={`fas fa-search lupa ${stylesSigned.lupa}`} />
          <SearchBar onSearchResults={handleSearchResults} className={stylesSigned.buscar_barra} />
        </div>

        <h1 style={{ marginTop: '70px' }} className='text-5xl text-white'>{categoriaActual.nombre}</h1>
        <p className='text-2xl my-10 text-white'>
          ¡Mira lo que hemos preparado para ti!
        </p>

        <div className="grid gap-4 grid-cols01 md:grid-cols-2 xl:grid-cols-3 bg-[#121212]">
          {productosParaMostrar.length > 0 ? (
            productosParaMostrar.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
                botonAgregar={true}
              />
            ))
          ) : (
            <p className='text-white text-2xl'>
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
