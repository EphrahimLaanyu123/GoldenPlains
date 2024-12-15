import React, { useState, useRef, useEffect } from 'react';
import './Nav3.css';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isApplicationsDropdownOpen, setIsApplicationsDropdownOpen] = useState(false);
  const [isCurriculumDropdownOpen, setIsCurriculumDropdownOpen] = useState(false);

  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleApplicationsDropdown = () => {
    setIsApplicationsDropdownOpen(!isApplicationsDropdownOpen);
  };

  const toggleCurriculumDropdown = () => {
    setIsCurriculumDropdownOpen(!isCurriculumDropdownOpen);
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar__logo-title">
          <img src={Logo} alt="Logo" className="navbar__logo" />
          <div className="navbar__titles">
            <p className="navbar__title">GOLDEN</p>
            <p className="navbar__title">PLAINS</p>
            <p className="navbar__title">SCHOOL</p>
          </div>
        </div>

        {/* Button to toggle the sidebar */}
        <button className="navbar__toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <div className="sidebar__links">
            {/* About Us Dropdown */}
            <div>
            <Link to="/" className="sidebar__link">
  <span>Home</span>
</Link>
              <button className="sidebar__link" onClick={toggleAboutDropdown}>
                <span>About Us</span>
                <span>{isAboutDropdownOpen ? "-" : "+"}</span>
              </button>
              {isAboutDropdownOpen && (
                <div className="sidebar__dropdown">
                  <Link to="/about"className="sidebar__dropdown-link">Why Us</Link>
                  <div>
              <button className="sidebar__dropdown-link" onClick={toggleCurriculumDropdown}>
                <span>Our Curriculum</span>
                <span>{isCurriculumDropdownOpen ? "-" : "+"}</span>
              </button>
              {isCurriculumDropdownOpen && (
                <div className="sidebar__dropdown">
                  <Link to="/arts-and-sports" className="sidebar__dropdown-link">Arts and Sports</Link>
                  <Link to="/social-sciences" className="sidebar__dropdown-link">Social Sciences</Link>
                  <Link to="/stem" className="sidebar__dropdown-link">STEM</Link>
                </div>
              )}
            </div>
                  <Link to='/co-curriculum'className="sidebar__dropdown-link">Our Co-Curriculum</Link>
                </div>
              )}
            </div>
            
            {/* Applications Dropdown */}
            <div>
              <button className="sidebar__link" onClick={toggleApplicationsDropdown}>
                <span>Applications</span>
                <span>{isApplicationsDropdownOpen ? "-" : "+"}</span>
              </button>
              {isApplicationsDropdownOpen && (
                <div className="sidebar__dropdown">
                  <button className="sidebar__dropdown-link">Admissions</button>
                  <button className="sidebar__dropdown-link">Forms</button>
                  <button className="sidebar__dropdown-link">Events</button>
                </div>
              )}
            </div>
            
            {/* Our Curriculum Dropdown */}

            
            {/* Navigation Link for Location */}
            <a className="sidebar__link"
              href="https://www.google.com/maps/place/Golden+Plains+Academy/@-1.4843699,36.9347071,1111m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182fa1e9adc7f505:0x2ab0b30c70afeeb6!8m2!3d-1.4843699!4d36.937282!16s%2Fg%2F11f77b9g21?hl=en&entry=ttu"
              target="_blank" 
              rel="noopener noreferrer" >
              Location
            </a>
          </div>
          <button className="sidebar__close" onClick={toggleSidebar}>
            Close Sidebar
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar3;
