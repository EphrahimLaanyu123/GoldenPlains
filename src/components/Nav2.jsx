import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav2.css';
import Logo from "../assets/logo.png";
import applicationFormPDF from "../assets/APPLICATION FOR EMPLOYEMENT FORM.pdf";
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/PRIMARY ADMN FORM.pdf";

const Nav2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isCurriculumDropdownOpen, setCurriculumDropdownOpen] = useState(false);
  const [isCoCurriculumDropdownOpen, setCoCurriculumDropdownOpen] = useState(false);
  const [isApplicationsDropdownOpen, setApplicationsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleAboutDropdown = (e) => {
    e.stopPropagation();
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleCurriculumDropdown = (e) => {
    e.stopPropagation();
    setCurriculumDropdownOpen(!isCurriculumDropdownOpen);
  };

  const toggleCoCurriculumDropdown = (e) => {
    e.stopPropagation();
    setCoCurriculumDropdownOpen(!isCoCurriculumDropdownOpen);
  };

  const toggleApplicationsDropdown = (e) => {
    e.stopPropagation();
    setApplicationsDropdownOpen(!isApplicationsDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setCurriculumDropdownOpen(false);
    setCoCurriculumDropdownOpen(false);
    setApplicationsDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <div className={`nav__overlay ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}></div>
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/" onClick={closeAllDropdowns}><img src={Logo} alt="Logo" /></Link>
          <div>
            <p>GOLDEN</p>
            <p>PLAINS</p>
            <p>SCHOOL</p>
          </div>
        </div>
        <button className="nav__toggle" onClick={toggleDropdown}>
          ☰
        </button>
        <div className={`nav__dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <ul className="nav__dropdown-menu">
            <li className="nav__dropdown-item">
              <Link to="/" onClick={toggleDropdown}>Home</Link>
            </li>
            <li className="nav__dropdown-item">
              <div className="nav__dropdown-about">
                <p className='nav__about-link' onClick={toggleAboutDropdown}>About</p>
                <button className="nav__about-toggle" onClick={toggleAboutDropdown}>
                  {isAboutDropdownOpen ? '-' : '+'}
                </button>
              </div>
              <ul className={`nav__about-dropdown ${isAboutDropdownOpen ? 'open' : ''}`}>
                <li>
                  <Link className='nav__about-link' to="/about" onClick={closeAllDropdowns}>
                    Why us
                  </Link>
                </li>
                <li>
                  <div className="nav__about-item">
                    <p className='nav__about-link' onClick={toggleCurriculumDropdown}>
                      Our Curriculum
                      <button className="nav__about-toggle nav__about-toggle-right">
                        {isCurriculumDropdownOpen ? '-' : '+'}
                      </button>
                    </p>
                    <ul className={`nav__curriculum-dropdown ${isCurriculumDropdownOpen ? 'open' : ''}`}>
                      <li><Link to="/arts-and-sports" onClick={closeAllDropdowns}>Arts and Sports</Link></li>
                      <li><Link to="/social-sciences" onClick={closeAllDropdowns}>Social Sciences</Link></li>
                      <li><Link to="/stem" onClick={closeAllDropdowns}>STEM</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link className='nav__about-link' to="/co-curriculum" onClick={closeAllDropdowns}>
                    Our Co-Curriculum
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav__dropdown-item">
              <div className="nav__dropdown-about">
                <p className='nav__about-link' onClick={toggleApplicationsDropdown}>Applications</p>
                <button className="nav__about-toggle" onClick={toggleApplicationsDropdown}>
                  {isApplicationsDropdownOpen ? '-' : '+'}
                </button>
              </div>
              <ul className={`nav__about-dropdown ${isApplicationsDropdownOpen ? 'open' : ''}`}>
                <li>
                  <h1>To be sent to info@goldenplainschool.com</h1>
                  <a href={applicationFormPDF} download onClick={closeAllDropdowns}>
                    Download Application Form
                  </a>
                </li>
                <li>
                  <a href={juniorPDF} download onClick={closeAllDropdowns}>
                    Download Junior Admission
                  </a>
                </li>
                <li>
                  <a href={primaryPDF} download onClick={closeAllDropdowns}>
                    Download Primary Admission
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__dropdown-item">
              <a 
                href="https://www.google.com/maps/place/Golden+Plains+Academy/@-1.4843699,36.9347071,1111m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182fa1e9adc7f505:0x2ab0b30c70afeeb6!8m2!3d-1.4843699!4d36.937282!16s%2Fg%2F11f77b9g21?hl=en&entry=ttu"
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeAllDropdowns}
              >
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
