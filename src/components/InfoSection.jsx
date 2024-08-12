import React from "react";
import { Link } from 'react-router-dom';
import "./InfoSection.css";
import kids from "../assets/DSC_5976.jpg";
import kidss from "../assets/DSC_5980.jpg";

function InfoSection() {
  return (
    <div className="main flex flex-wrap gap-10 pb-10 justify-center text-blue-900 pt-10 bg-orange-100 shadow-lg">
      <div className="isections">
        <div className="isection-1">
          <div className="i-section-content">
            <div className="i-section-p">
              <h1 className="i-section-p-p">WHO WE ARE</h1>
              <p className="section-pp">
                Golden Plains School is a beacon of educational excellence, dedicated to nurturing young minds and fostering a lifelong love of learning. Our school community is built on the principles of integrity, inclusivity, and innovation, where every student is empowered to reach their full potential.
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
                Golden Plains School is a beacon of educational excellence, dedicated to nurturing young minds and fostering a lifelong love of learning. Our school community is built on the principles of integrity, inclusivity, and innovation, where every student is empowered to reach their full potential.
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
                    Become a part of the Golden Plains School family and embark on a journey of lifelong learning and personal growth. We welcome students from diverse backgrounds and offer a supportive environment where every individual is valued. Join us to experience a vibrant, inclusive community that nurtures your talents and encourages you to achieve your best.
                                </p>
                  <button className="section-button-3">Download application file</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
