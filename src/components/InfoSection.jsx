import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./InfoSection.css";
import kids from "../assets/DSC_5976.jpg";
import kidss from "../assets/DSC_5980.jpg";
import applicationFormPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";

import Modal from "./Modal";

function InfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main flex flex-wrap gap-10 pb-10 justify-center text-blue-900 pt-10 bg-orange-100 shadow-lg">
      <div className="isections">
        <div className="isection-1">
          <div className="i-section-content">
            <div className="i-section-p">
              <h1 className="i-section-p-p">WHO WE ARE</h1>
              <p className="section-pp">
              Golden Plains School (GPS) is a private primary and junior secondary school in Kitengela, Kajiado County, offering Kenya's Competency-Based Curriculum (CBC) with modern facilities. Led by founder Rael Kananga, an expert in Early Childhood Education with 40+ years of experience, the school emphasizes holistic development, Christian values, and global citizenship. Guided by its motto, Nurturing the Future, GPS provides a supportive environment for students to thrive academically and personally.
              </p>
              <Link to='/about' className="section-button">Read More</Link>
            </div>
            <div className="kids-img">
              <img src={kids} className="image-itself" alt="Kids" />
            </div>
          </div>
        </div>

        <div className="isection-2">
          <div className="i-section-content-2">
            <div className="kids-img-2">
              <img src={kidss} className="image-itself-2" alt="Kids" />
            </div>
            <div className="i-section-p-2">
              <h1>WHAT WE DO</h1>
              <p className="section-pp-2">
              At GPS every child is considered unique. Talent development is individualized, and
learning is delivered via a combination of theoretical and practical methods. Every
child is encouraged to be a member of at least one club and every pupil has
opportunity to engage in a sporting activity.
Monitoring and evaluation are integrated in daily school programs with a department
of examinations and quality control in place. Where remedial assistance is needed,
the school facilitates this with due regard to the wellbeing of the pupils.
              </p>
              <Link to='/about' className="section-button-2">Read More</Link>
            </div>
          </div>
        </div>

        <div className="isection-3">
          <div className="i-section-p-3">
            <div className="i-section-content-2">
              <div className="i-section-p-2">
                <h1>JOIN US</h1>
                <p className="section-pp-2">
                Welcome to Golden Plains School. You can seek admission for your child by
following the instructions on the admissions tab in this website. You can also contact
the school through any of the contacts given and any of the social media accounts. A
physical visit to the school campus during office hours is always welcome. Come and
experience the serene and conducive learning environment that is GPS.
                </p>
                <button className="section-button-3" onClick={openModal}>
                  Download options
                </button>
              </div>
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

export default InfoSection;