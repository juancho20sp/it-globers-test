import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.scss'

export const Modal: React.FC<{ open: boolean, onClose: any }> = ({ open, children, onClose }) => {
    const [isFading, setIsFading] = useState(false);

    const resetComponent = () => {
        setIsFading(false);
        onClose();
    }


    if (!open) return null;


    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className={`modal ${isFading ? 'fadeout' : ''}`}
                onTransitionEnd={resetComponent}>
                <button onClick={onClose}>Cerrar</button>
                {children}

                <button onClick={() => setIsFading(!isFading)}>Toggle fadeout</button>
            </div>
        </>
        , document.getElementById('portal') as HTMLElement
    )
}
