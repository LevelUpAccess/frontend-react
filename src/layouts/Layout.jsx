import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
import useQuiosco from '../hooks/useQuiosco';
import ModalProducto from '../components/ModalProducto';
import styles from '../layout.module.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function Layout() {
  const { modal } = useQuiosco();

  const [colorAdjust, setColorAdjust] = useState(0);
  const [mostrarControles, setMostrarControles] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [originalColorAdjust, setOriginalColorAdjust] = useState(0);

  const paletas = [
    ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'],
    ['#FF6666', '#FFCC66', '#FFFF66', '#66FF66', '#6666FF', '#A366FF', '#FF66CC'],
    ['#FF9999', '#FFCC99', '#FFFF99', '#99FF99', '#9999FF', '#CC99FF', '#FF99CC']
  ];

  useEffect(() => {
    const root = document.documentElement;
    const selectedColors = paletas[selectedPalette];
    selectedColors.forEach((color, idx) => {
      root.style.setProperty(`--color${idx + 1}`, color);
    });
  }, [selectedPalette]);

  useEffect(() => {
    document.documentElement.style.filter = `hue-rotate(${colorAdjust}deg)`;
  }, [colorAdjust]);

  const handleChangeColorAdjust = (event) => {
    setColorAdjust(event.target.value);
  };

  const toggleControles = (e) => {
    e.preventDefault();
    setOriginalColorAdjust(colorAdjust);
    setMostrarControles(!mostrarControles);
  };

  const selectPalette = (index) => {
    setSelectedPalette(index);
    setColorAdjust(0);
  };

  const closeControles = () => {
    setMostrarControles(false);
  };

  const cancelControles = () => {
    setColorAdjust(originalColorAdjust);
    setMostrarControles(false);
  };

  return (
    <>
      <div className='md:flex'>
        <Sidebar />
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100'>
          <Outlet />

          <div className={styles.ayuda}>
            <a href="#" onClick={toggleControles}>
              <img src="../img/paleta.png" alt="Icono de configuración de color" />
            </a>
          </div>

          {mostrarControles && (
            <div className={styles['controles-ajuste']}>
              <h2>Configuración de color</h2>
              <p>Paso 1: Visualiza las paletas de colores:</p>
              <div className={styles.paletas}>
                {paletas.map((paleta, index) => (
                  <div key={index} className={styles['paleta-container']}>
                    <label>
                      {paleta.map((color, idx) => (
                        <div key={idx} className={styles.color} style={{ backgroundColor: color }}></div>
                      ))}
                    </label>
                  </div>
                ))}
              </div>
              <p>Paso 2: Ajusta el tono de color para personalizar la apariencia:</p>
              <div className={styles['color-selector']}>
                <label htmlFor="colorAdjust">Ajustar tono: </label>
                <input
                  type="range"
                  id="colorAdjust"
                  min="-180"
                  max="180"
                  value={colorAdjust}
                  onChange={handleChangeColorAdjust}
                />
              </div>
              <div className={styles.buttons}>
                <button className={styles['aceptar-button']} onClick={closeControles}>Aceptar</button>
                <button className={styles['cancelar-button']} onClick={cancelControles}>Cancelar</button>
              </div>
            </div>
          )}
        </main>
        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
}












