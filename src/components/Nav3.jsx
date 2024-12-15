import React, { useState, useRef, useEffect } from 'react';
import './Nav3.css';
import Logo from "../assets/logo.png";

const Navbar3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isApplicationsDropdownOpen, setIsApplicationsDropdownOpen] = useState(false);

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
              <button className="sidebar__link" onClick={toggleAboutDropdown}>
                <span>About Us</span>
                <span>{isAboutDropdownOpen ? "-" : "+"}</span>
              </button>
              {isAboutDropdownOpen && (
                <div className="sidebar__dropdown">
                  <button className="sidebar__dropdown-link">Why Us</button>
                  <button className="sidebar__dropdown-link">Our Curriculum</button>
                  <button className="sidebar__dropdown-link">Our Co-Curriculum</button>
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
            <div>
              <button className="sidebar__link" onClick={toggleCurriculumDropdown}>
                <span>Our Curriculum</span>
                <span>{isCurriculumDropdownOpen ? "-" : "+"}</span>
              </button>

            </div>
            
            {/* Navigation Link for Location */}
            <button className="sidebar__link" onClick={() => alert("Navigate to Location")}>
              Location
            </button>
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
