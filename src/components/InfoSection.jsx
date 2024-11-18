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
              Golden Plains Academy (GPA) is a co-educational private primary &amp; junior
secondary school located in Airview/Milimani estate of Kitengela Township in Kajiado
County. It is about 4km from the township, off the old Namanga Road and along the
Golden Plains Avenue. The school offers programs approved by the Kenya Ministry
of Education and follows the government curriculum as a minimum. The school is
fully equipped to offer the Competency Based Curriculum (CBC) with all the facilities
including a computer lab, a science lab, home science workshop, and agriculture
demo farm, in place.
The school boasts of a very competent professional teaching staff headed by its
founding director who has over 40 years teaching and school management
experience. Rael Kananga is an expert on Early Childhood Education and has
authored teaching materials in this regard. The compliment of 25 teachers has a
cumulative experience of over 100 years of teaching.
GPA is founded on very strong Christian values, and it is an excellent environment
for the young to learn, play and grow in all aspects of life. With a strong emphasis on
wholistic learning and cultured discipline, the school is a fountain of knowledge and
aims to mold citizens who will serve the global community with integrity and
unbridled faith. Guided by its motto, ‘Nurturing the Future’ Golden Plains Academy is
a home where learning is fun, and every child is nurtured with ultimate care and
scholarly passion to achieve best potential.
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
              At GPA every child is considered unique. Talent development is individualized, and
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
                Welcome to Golden Plains Academy. You can seek admission for your child by
following the instructions on the admissions tab in this website. You can also contact
the school through any of the contacts given and any of the social media accounts. A
physical visit to the school campus during office hours is always welcome. Come and
experience the serene and conducive learning environment that is GPA.
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