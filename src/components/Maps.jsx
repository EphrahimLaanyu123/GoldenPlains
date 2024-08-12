import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import "./Maps.css";

const MapComponent = () => {
  return (
    <div className="main-container">
      <div className="map-container">
        <div className="content-wrapper">
          <div className="location-section">
            <div className="location-title">LOCATION</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.479452082699!2d36.93470707577125!3d-1.4843698985016802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa1e9adc7f505%3A0x2ab0b30c70afeeb6!2sGolden%20Plains%20Academy!5e0!3m2!1sen!2ske!4v1718279140551!5m2!1sen!2ske"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-section">
            <div className="find-us-title">FIND US!</div>
            <div className="contact-info">
              <p className="contact-heading">Address</p>
              <p className="contact-text">Airview Estate, Kitengela</p>
              <p className="contact-text">P.O Box 589 - 00204 Athi River</p>
              <p className="contact-text">Tel: 0728 907 526 / 0733 851 123</p>
              <p className="contact-text">Email: info@goldenplainsjps.com</p>
            </div>
            <div className="social-icons">
              <FaFacebook />
              <AiFillTwitterCircle />
              <RiInstagramFill />
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
