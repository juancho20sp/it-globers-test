import React from 'react';
import ReactDOM from 'react-dom';

import { IoMdClose } from 'react-icons/io'

import './styles.scss'

export const Modal: React.FC<{ open: boolean, onClose: any, isFadingOut: any }> = ({ open, children, onClose, isFadingOut }) => {

    // If the modal is not open, do not show it
    if (!open) return null;


    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className={`modal ${isFadingOut ? 'fadeout' : ''}`}
                onTransitionEnd={onClose}>
                <span className="close-icon" onClick={onClose}>
                    <IoMdClose />
                </span>

                {children}
            </div>
        </>
        , document.getElementById('portal') as HTMLElement
    )
}

