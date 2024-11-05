import React, { useState, useEffect } from 'react';
import "../stylesheet/ImageSlider.css";
import { FaCircle } from "react-icons/fa6";

import image0 from '../Images0/Portfolio_Illustrations0001.png';
import image1 from '../Images0/Portfolio_Illustrations0002.png';
import image2 from '../Images0/Portfolio_Illustrations0003.png';
import image3 from '../Images0/Portfolio_Illustrations0004.png';
import image4 from '../Images0/Portfolio_Illustrations0005.png';

const images = [image0, image1, image2, image3, image4];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    // Calcular los índices para las imágenes previa y siguiente
    const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;

    // Función para avanzar a la siguiente imagen
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    // Función para retroceder a la imagen anterior
    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    // Añadir la clase de shake temporalmente al cambiar de imagen
    useEffect(() => {
        setIsShaking(true);
        const timer = setTimeout(() => setIsShaking(false), 500); // Duración de la animación en ms
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className='image-slider'>
            <div className="image-slider-container">
                {/* Imagen previa */}
                <img
                    src={images[prevIndex]}
                    className="prev-image"
                    onClick={goToPrev}
                    alt="Imagen previa"
                />

                {/* Imagen actual */}
                <img
                    src={images[currentIndex]}
                    className={`current-image ${isShaking ? 'shake' : ''}`}
                    alt="Imagen actual"
                />

                {/* Imagen siguiente */}
                <img
                    src={images[nextIndex]}
                    className="next-image"
                    onClick={goToNext}
                    alt="Imagen siguiente"
                />
            </div>
            <div className="image-slider-navbar">
                <p onClick={goToPrev}>&lt;</p>
                {
                    images.map((current, index) => (
                        index == currentIndex ?
                            <FaCircle className='current-image-indicator-current' />
                            :
                            <FaCircle className='current-image-indicator' onClick={() => {
                                setCurrentIndex(index)
                            }} />
                    ))
                }
                <p onClick={goToNext}>&gt;</p>
            </div>
        </div>
    );
}

export default ImageSlider;
