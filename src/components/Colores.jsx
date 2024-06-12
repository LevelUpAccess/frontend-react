import React, { useState, useEffect } from 'react';
import styles from '../styles/colores.module.css'; // Importa los estilos

export default function Colores() {
    // Inicialización del estado desde localStorage
    const [colorAdjust, setColorAdjust] = useState(() => {
        const savedColorAdjust = localStorage.getItem('colorAdjust');
        return savedColorAdjust !== null ? Number(savedColorAdjust) : 0;
    });
    const [mostrarControles, setMostrarControles] = useState(false);
    const [selectedPalette, setSelectedPalette] = useState(() => {
        const savedPalette = localStorage.getItem('selectedPalette');
        return savedPalette !== null ? Number(savedPalette) : 0;
    });
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
        localStorage.setItem('selectedPalette', selectedPalette);
    }, [selectedPalette]);

    useEffect(() => {
        document.documentElement.style.filter = `hue-rotate(${colorAdjust}deg)`;
        localStorage.setItem('colorAdjust', colorAdjust);
    }, [colorAdjust]);

    const handleChangeColorAdjust = (event) => {
        setColorAdjust(event.target.value);
    };

    const toggleControles = (e) => {
        e.preventDefault();
        setOriginalColorAdjust(colorAdjust);
        setMostrarControles(!mostrarControles);
    };

    const closeControles = () => {
        setMostrarControles(false);
    };

    const cancelControles = () => {
        setColorAdjust(originalColorAdjust);
        setMostrarControles(false);
    };

    const handlePaletteClick = (index) => {
        setSelectedPalette(index);
    };

    return (
        <div>
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
                            <div key={index} className={styles['paleta-container']} onClick={() => handlePaletteClick(index)}>
                                {paleta.map((color, idx) => (
                                    <div key={idx} className={styles.color} style={{ backgroundColor: color }}></div>
                                ))}
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
        </div>
    );
}
