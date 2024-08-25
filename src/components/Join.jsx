import React, { useRef, useEffect, useState } from "react";
import Hero from "../assets/HeroImage.png";
import { Link } from "react-router-dom";
import './Join.css';
import applicationFormPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import Modal from "./Modal";


function Join() {
  const [isBlurred, setIsBlurred] = useState(false);
  const joinRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsBlurred(false);
          } else {
            setIsBlurred(true);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (joinRef.current) {
      observer.observe(joinRef.current);
    }

    return () => {
      if (joinRef.current) {
        observer.unobserve(joinRef.current);
      }
    };
  }, [joinRef]);

  return (
    <div className={`join-container ${isBlurred ? 'blurred' : ''}`} ref={joinRef}>
      <div
        className="join-background"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="join-overlay"></div>
        <div className="join-content">
          <div className="join-title">Join Our Team</div>
          <div className="join-subtitle">
            IF YOU ARE READY TO MAKE A DIFFERENCE IN THE LIVES OF CHILDREN, WE ENCOURAGE YOU TO EXPLORE OUR CAREERS TAB TODAY! WE LOOK FORWARD TO HEARING FROM YOU.
          </div>
          <div className="join-button">
            <div className="join-link" onClick={openModal}>
              APPLY HERE
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Select a file to download:</h2>
        <div className="download-options">
          <a href={juniorPDF} download="junior_application_form.pdf" className="download-link">Junior Application Form</a>
          <a href={primaryPDF} download="primary_application_form.pdf" className="download-link">Primary Application Form</a>
          <a href={applicationFormPDF} download="application_form.pdf" className="download-link">Application Form</a>
        </div>
      </Modal>
    </div>
  );
}

export default Join;
