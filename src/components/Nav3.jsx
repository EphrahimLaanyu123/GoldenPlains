import React, { useState, useEffect, useRef } from 'react';
import './Nav3.css';
import Logo from "../assets/logo.png";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar3 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isCurriculumDropdownOpen, setCurriculumDropdownOpen] = useState(false);

  // Create a reference to the sidebar for handling clicks
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(prev => !prev);
  };

  const toggleCurriculumDropdown = () => {
    setCurriculumDropdownOpen(prev => !prev);
  };

  // Detect clicks outside sidebar to close it
  const handleClickOutside = (e) => {
    if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
      setAboutDropdownOpen(false);
      setCurriculumDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSidebarOpen]); // Listen only if sidebar is open

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo & Title */}
        <div className="navbar__logo-title">
          <img src={Logo} alt="Logo" className="navbar__logo" />
          <div className="navbar__titles">
            <p className="navbar__title">GOLDEN</p>
            <p className="navbar__title">PLAINS</p>
            <p className="navbar__title">SCHOOL</p>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button className="navbar__toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <ul className="nav__dropdown-menu">
            <li>
              <a href="/" onClick={toggleSidebar}>
                Home
              </a>
            </li>
            <li>
              <div className="nav__about-section">
                <p onClick={toggleAboutDropdown}>About</p>
                <button
                  className="nav__dropdown-toggle"
                  onClick={toggleAboutDropdown}
                >
                  {isAboutDropdownOpen ? '-' : '+'}
                </button>
              </div>
              {isAboutDropdownOpen && (
                <ul className="nav__about-dropdown">
                  <li><a href="/about">Why us</a></li>
                  <li>
                    <div className="nav__curriculum-section">
                      <p onClick={toggleCurriculumDropdown}>
                        Our Curriculum
                      </p>
                      <button
                        className="nav__dropdown-toggle"
                        onClick={toggleCurriculumDropdown}
                      >
                        {isCurriculumDropdownOpen ? '-' : '+'}
                      </button>
                      {isCurriculumDropdownOpen && (
                        <ul className="nav__curriculum-dropdown">
                          <li><a href="/arts-and-sports">Arts and Sports</a></li>
                          <li><a href="/social-sciences">Social Sciences</a></li>
                          <li><a href="/stem">STEM</a></li>
                        </ul>
                      )}
                    </div>
                  </li>
                  <li><a href="/co-curriculum">Our Co-Curriculum</a></li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Golden+Plains+Academy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleSidebar}
              >
                Location
              </a>
            </li>
          </ul>
          <button className="sidebar__close" onClick={toggleSidebar}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar3;
