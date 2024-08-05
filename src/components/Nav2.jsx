import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav2.css';
import Logo from "../assets/logo.png";

const Nav2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isCurriculumDropdownOpen, setCurriculumDropdownOpen] = useState(false);
  const [isCoCurriculumDropdownOpen, setCoCurriculumDropdownOpen] = useState(false);

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

  const closeAboutDropdown = (e) => {
    e.stopPropagation();
    setAboutDropdownOpen(false);
  };

  const closeCurriculumDropdown = (e) => {
    e.stopPropagation();
    setCurriculumDropdownOpen(false);
  };

  const closeCoCurriculumDropdown = (e) => {
    e.stopPropagation();
    setCoCurriculumDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <div className={`nav__overlay ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}></div>
      <div className="nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="Logo" />
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
                {isAboutDropdownOpen ? (
                  <button className="nav__about-toggle" onClick={closeAboutDropdown}>-</button>
                ) : (
                  <button className="nav__about-toggle">+</button>
                )}
              </div>
              <ul className={`nav__about-dropdown ${isAboutDropdownOpen ? 'open' : ''}`}>
                <li>
                  <div className="nav__about-item">
                    <p className='nav__about-link' onClick={toggleCurriculumDropdown}>
                      Our Curriculum
                      {isCurriculumDropdownOpen ? (
                        <button className="nav__about-toggle nav__about-toggle-right" onClick={closeCurriculumDropdown}>-</button>
                      ) : (
                        <button className="nav__about-toggle nav__about-toggle-right">+</button>
                      )}
                    </p>
                    <ul className={`nav__curriculum-dropdown ${isCurriculumDropdownOpen ? 'open' : ''}`}>
                      <li><Link to="/about/curriculum/overview" onClick={toggleDropdown}>Overview</Link></li>
                      <li><Link to="/about/curriculum/details" onClick={toggleDropdown}>Details</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="nav__about-item">
                    <p className='nav__about-link' onClick={toggleCoCurriculumDropdown}>
                      Our Co-Curriculum
                      {isCoCurriculumDropdownOpen ? (
                        <button className="nav__about-toggle nav__about-toggle-right" onClick={closeCoCurriculumDropdown}>-</button>
                      ) : (
                        <button className="nav__about-toggle nav__about-toggle-right">+</button>
                      )}
                    </p>
                    <ul className={`nav__co-curriculum-dropdown ${isCoCurriculumDropdownOpen ? 'open' : ''}`}>
                      <li><Link to="/about/co-curriculum/activities" onClick={toggleDropdown}>Activities</Link></li>
                      <li><Link to="/about/co-curriculum/events" onClick={toggleDropdown}>Events</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="/about/location" onClick={toggleDropdown}>Location</Link></li>
              </ul>
            </li>
            <li className="nav__dropdown-item">
              <Link to="/services" onClick={toggleDropdown}>Services</Link>
            </li>
            <li className="nav__dropdown-item">
              <Link to="/contact" onClick={toggleDropdown}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
