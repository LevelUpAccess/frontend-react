import React from 'react';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';
import styles from '../styles/producto.module.css';

const Producto = ({ producto, botonAgregar = false, botonDisponible = false }) => {
  const { handleClickModal, handleSetProducto, handleClickProductoAgotado,  handleAgregarAWishlist } = useQuiosco();
  const { nombre, precio, imagen } = producto;

  return (

    <div className="shadow bg-[#202020] rounded">
        <div className="p-5">
            <div className="flex justify-center mb-2">
                <img 
                        alt={`imagen ${nombre}`} 
                        // className = "w-50"
                        src= {`/img/${imagen}.jpg`}
                        style={{ width: '700px',  height: '600px'}}
                        
                    />
            </div>
            
            <h3 className="text-2xl font-bold text-white">{nombre}</h3>
            <p className="mt-2 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>

            {botonAgregar && (
                <div className="flex space-x-2 mt-5">
                <button
                    type="button"
                    className="bg-[#ef3340] hover:bg-[#BA0310] text-white p-3 uppercase font-bold text-xl transition duration-300 rounded-xl flex-1"
                    onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                    }}
                >
                    Agregar
                </button>

                <button
                    type="button"
                    className="text-[#6d6d6d] font-bold text-xl transition duration-300"
                    onClick={() => handleAgregarAWishlist(producto)}
                >
                    <span className={`${styles.corazon}`}>
                        <i className={`${styles.corazon} fas fa-heart fa-lg`}></i>
                    </span>
                </button>

                </div>
            )}

            {botonDisponible && (
                <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => handleClickProductoAgotado(producto.id)}
                >
                Producto Agotado
                </button>
            )}
        </div>
    </div>
  );
};

export default Producto;
