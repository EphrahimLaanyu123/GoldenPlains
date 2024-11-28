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
            At GOLDEN PLAINS PRIMARY AND JUNIOR SCHOOL, we have a very dedicated,
            hardworking and competent staff that will go an extra mile as only the best
            will do for the children in our care.
            We work in a very close partnership with parents to achieve success for all,
            based on high expectations and equality of access to all.
            We nurture the growth of the whole child; academically, socially, morally,
            emotionally, spiritually and physically in a safe and caring environment.
            We believe that a happy child will be a successful child and work to ensure
            every child enjoys school and achieves success. We do this by providing the
            best teaching and experiences that we can through an exciting and engaging
            Competency Based Curriculum (CBC).
            Our levels run from pre-school, primary and junior school.
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
