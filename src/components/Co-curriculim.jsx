import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Home from '../../src/assets/home.png';
import Music from "../../src/assets/piano.png";
import Computer from "../../src/assets/computer.png";
import './Courriculum.css'; // Import the CSS file
import art from '../assets/co-image/pexels-pixabay-37539.jpg';
import journalism from '../assets/co-image/pexels-brotin-biswas-158640-518543.jpg';
import french from '../assets/co-image/pexels-atypeek-5781917.jpg';
import science from '../assets/co-image/pexels-chokniti-khongchum-1197604-2280571.jpg';
import hscience from "../assets/co-image/pexels-goumbik-616401.jpg"


function Courriculum() {
  return (
    <div className="courriculum">
      <div className="the-container">
        <div className="top-part">
          <div className="courriculum-title">OUR CO-CURRICULUM</div>
          <div className="courriculum-description">
            At our school, we believe in learning that extends beyond the core
            subjects of the competency based curriculum (cbc). <br />That’s why we offer a
            vibrant selection of clubs designed to spark your interests, talents, and
            creativity.
          </div>
          <Link to="/Co-Curriculum" className="courriculum-link">EXPLORE CO-CURRICULUM</Link>
        </div>
        <div className="bottom-part">
          <div className="images-container">
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="Home Club">
              <img src={hscience} alt="Home Science Club" />
            </Link>
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="Drama and Music Club">
              <img src={Music} alt="Drama and Music Club" />
            </Link>
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="SCIENCE AND ENVIRONMENTAL CLUB">
              <img src={science} alt="Computer Club" />
            </Link>
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="ART CLUB">
              <img src={art} alt="Computer Club" />
            </Link>
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="JOURNALISM CLUB">
              <img src={journalism} alt="Computer Club" />
            </Link>
            <Link to="/Co-Curriculum" className="image-wrapper" data-name="CLUB DE FRANÇAIS">
              <img src={french} alt="Computer Club" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courriculum;
