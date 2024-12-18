import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, juniorPDF, primaryPDF }) {
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
        <h2 className="modal-title">Download Application Forms</h2>
        <div className="modal-buttons">
          <a
            href={juniorPDF}
            download="Junior_School_Application"
            className="modal-download-btn"
          >
            Download Junior School Form
          </a>
          <a
            href={primaryPDF}
            download="Primary_School_Application"
            className="modal-download-btn"
          >
            Download Primary School Form
          </a>
        </div>
        <p>
          To be sent to{" "}
          <a href="mailto:info@goldenplainschool.com" className="modal-email">
            info@goldenplainschool.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Modal;
