import React from "react";
import Home from '../../src/assets/home.png';
import Music from "../../src/assets/piano.png";
import Computer from "../../src/assets/computer.png";
import './Courriculum.css'; // Import the CSS file

function Courriculum() {
  return (
    <div className="courriculum">
      <div className="the-container">
        <div className="top-part">
          <div className="courriculum-title">Our Co-curriculum</div>
          <div className="courriculum-description">
            At our school, we believe in learning that extends beyond the core
            subjects of the competency based curriculum (cbc). <br />That’s why we offer a
            vibrant selection of clubs designed to spark your interests, talents and
            creativity.
          </div>
        </div>
        <div className="bottom-part">
          <div className="images-container">
            <div className="image-wrapper" data-name="Home Club">
              <img src={Home} alt="Home Club" />
            </div>
            <div className="image-wrapper" data-name="Music Club">
              <img src={Music} alt="Music Club" />
            </div>
            <div className="image-wrapper" data-name="Computer Club">
              <img src={Computer} alt="Computer Club" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courriculum;
