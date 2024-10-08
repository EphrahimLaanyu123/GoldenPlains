import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  // Close the modal if clicking on the overlay but not on the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
