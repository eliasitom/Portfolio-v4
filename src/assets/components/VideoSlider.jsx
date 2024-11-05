import React, { useState, useEffect } from 'react';
import "../stylesheet/ImageSlider.css";
import { FaCircle } from "react-icons/fa6";

import video0 from '../Videos0/Portfolio_Animations.mp4';


const videos = [video0, video0, video0, video0, video0];

function VideoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    // Calcular los índices para las imágenes previa y siguiente
    const prevIndex = (currentIndex === 0) ? videos.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex === videos.length - 1) ? 0 : currentIndex + 1;

    // Función para avanzar a la siguiente imagen
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % videos.length);
    };

    // Función para retroceder a la imagen anterior
    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
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
                <video className="prev-image" autoPlay loop muted playsInline onClick={goToPrev}>
                    <source src={videos[prevIndex]} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

                {/* Imagen actual */}
                <video 
                className={`current-image ${isShaking ? 'shake' : ''}`}
                 autoPlay loop muted playsInline 
                 onClick={goToPrev}
                 >
                    <source src={videos[currentIndex]} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

                {/* Imagen siguiente */}
                <video className="next-image" autoPlay loop muted playsInline onClick={goToNext}>
                    <source src={videos[nextIndex]} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            </div>
            <div className="image-slider-navbar">
                {
                    videos.map((current, index) => (
                        index == currentIndex ?
                            <FaCircle className='current-image-indicator-current' />
                            :
                            <FaCircle className='current-image-indicator' onClick={() => {
                                setCurrentIndex(index)
                            }} />
                    ))
                }
            </div>
        </div>
    );
}

export default VideoSlider;
