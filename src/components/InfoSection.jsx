import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"; // Import react-helmet
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
    <div>
      <Helmet>
        <meta name="description" content="Learn more about Golden Plains School, its mission, what we do, and how you can join us. Located in Kitengela, Kajiado County." />
        <meta name="keywords" content="Golden Plains School, GPS, primary school, junior secondary, Kenya, Competency-Based Curriculum, CBC, education" />
        <meta name="robots" content="index, follow" />
    
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Golden Plains School - Information" />
        <meta property="og:description" content="Learn more about Golden Plains School, its mission, what we do, and how you can join us. Located in Kitengela, Kajiado County." />
        <meta property="og:image" content={kids} />
        <meta property="og:url" content="https://www.goldenplainsschool.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Golden Plains School - Information" />
        <meta name="twitter:description" content="Learn more about Golden Plains School, its mission, what we do, and how you can join us." />
        <meta name="twitter:image" content={kids} />
      </Helmet>

      <main>
        <section className="main flex flex-wrap gap-10 pb-10 justify-center text-blue-900 pt-10 bg-orange-100 shadow-lg">
          <div className="isections">
            
            <article className="isection-1">
              <header className="i-section-content">
                <div className="i-section-p">
                  <h2 className="i-section-p-p">WHO WE ARE</h2>
                  <p className="section-pp">
                    Golden Plains School (GPS) is a private primary and junior secondary school in Kitengela, Kajiado County, offering Kenya's Competency-Based Curriculum (CBC) with modern facilities. Led by founder Rael Kananga, an expert in Early Childhood Education with 40+ years of experience, the school emphasizes holistic development, Christian values, and global citizenship. Guided by its motto, Nurturing the Future, GPS provides a supportive environment for students to thrive academically and personally.
                  </p>
                  <Link to='/about' className="section-button">Read More</Link>
                </div>
                <figure className="kids-img">
                  <img src={kids} className="image-itself" alt="Golden Plains School children learning together" />
                </figure>
              </header>
            </article>

            <article className="isection-2">
              <header className="i-section-content-2">
                <figure className="kids-img-2">
                  <img src={kidss} className="image-itself-2" alt="Golden Plains School students participating in sports" />
                </figure>
                <div className="i-section-p-2">
                  <h2>WHAT WE DO</h2>
                  <p className="section-pp-2">
                    At GPS, every child is considered unique. Talent development is individualized, and learning is delivered via a combination of theoretical and practical methods. Every child is encouraged to be a member of at least one club, and every pupil has the opportunity to engage in a sporting activity. Monitoring and evaluation are integrated into daily school programs, with a department of examinations and quality control in place. Where remedial assistance is needed, the school facilitates this with due regard to the wellbeing of the pupils.
                  </p>
                  <Link to='/about' className="section-button-2">Read More</Link>
                </div>
              </header>
            </article>

            <article className="isection-3">
              <header className="i-section-p-3">
                <div className="i-section-content-2">
                  <div className="i-section-p-2">
                    <h2>JOIN US</h2>
                    <p className="section-pp-2">
                      Welcome to Golden Plains School. You can seek admission for your child by following the instructions on the admissions tab on this website. You can also contact the school through any of the contacts given and any of the social media accounts. A physical visit to the school campus during office hours is always welcome. Come and experience the serene and conducive learning environment that is GPS.
                    </p>
                  </div>
                </div>
              </header>
            </article>
            
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Select a file to download:</h2>
            <div className="download-options">
              <a href="#" className="download-link">Junior Application Form</a>
              <a href={primaryPDF} download="primary_application_form.pdf" className="download-link">Primary Application Form</a>
              <a href={applicationFormPDF} download="application_form.pdf" className="download-link">Application Form</a>
            </div>
          </Modal>
        </section>
      </main>
    </div>
  );
}

export default InfoSection;
