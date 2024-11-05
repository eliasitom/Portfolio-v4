import React, { useState } from 'react';
import "../stylesheet/NotificationModal.css";

function NotificationModal({ link, icon: Icon }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setIsVisible(true);
                // Oculta el modal después de 3 segundos
                setTimeout(() => setIsVisible(false), 3000);
            })
            .catch(err => console.error("Error al copiar el enlace:", err));
    };

    return (
        <div>
            {/* Ícono para copiar, pasado como prop */}
            <Icon 
                className="copy-icon" 
                onClick={handleCopyLink} 
                title="Copiar link" 
                style={{ cursor: 'pointer', fontSize: '24px' }}
            />
            
            {/* Modal de notificación */}
            {isVisible && (
                <div className="notification-modal">
                    Link copied.
                </div>
            )}
        </div>
    );
}

export default NotificationModal;
