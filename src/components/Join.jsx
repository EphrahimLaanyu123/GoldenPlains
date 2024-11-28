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
          <div className="join-title">HEADTEACHER'S NOTE</div>
          <div className="join-subtitle">
  At GOLDEN PLAINS PRIMARY AND JUNIOR SCHOOL, we have a dedicated and hardworking staff committed to the success and well-being of our students. We work closely with parents to ensure every child has equal access to opportunities and achieves success. Our focus is on nurturing the whole child—academically, socially, morally, emotionally, and physically—within a safe and caring environment. We believe that a happy child is a successful one and offer an engaging Competency Based Curriculum (CBC) to support their growth across preschool, primary, and junior school levels.
</div>

          <div className="join-headteacher">
            Head teacher<br />Mutembei Mbogo Julius.
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
