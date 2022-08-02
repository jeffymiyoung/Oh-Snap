// Imports
import React from 'react';

// Modal Functionality
function Modal({ onClose, currentPhoto }) {

    // Declarations
    const { name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

// Export for External
export default Modal;