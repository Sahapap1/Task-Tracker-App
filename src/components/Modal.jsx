import React, { useEffect } from 'react';
import '../style/Modal.css'


export const Modal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
         
    }, [isOpen]);
    if (!isOpen) return null;


    return (
        <div className="modal-overlay">
            <div className="my-custom-modal">
                <button className="close-button" onClick={onClose}>
                    &times; 
                </button>
                {children}
            </div>
        </div>
    )
}
