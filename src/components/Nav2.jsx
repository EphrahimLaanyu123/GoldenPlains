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
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
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
                    <Link className='nav__about-link' to="/about" >
                      Why us
                    </Link>
                  </div>
                </li>
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
                      <li><Link to="/arts-and-sports" onClick={toggleDropdown}>Arts and Sports</Link></li>
                      <li><Link to="/social-sciences" onClick={toggleDropdown}>Social Sciences</Link></li>
                      <li><Link to="/stem" onClick={toggleDropdown}>STEM</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="nav__about-item">
                    <Link className='nav__about-link' to="/co-curriculum">
                      Our Co-Curriculum
                    </Link>
                  </div>
                </li>

              </ul>
            </li>
            <li className="nav__dropdown-item">
                  <a 
                    href="https://www.google.com/maps/place/Golden+Plains+Academy/@-1.4843699,36.9347071,1111m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182fa1e9adc7f505:0x2ab0b30c70afeeb6!8m2!3d-1.4843699!4d36.937282!16s%2Fg%2F11f77b9g21?hl=en&entry=ttu"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={toggleDropdown}
                  >
                    Location
                  </a>
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
