import React, { useState } from 'react';
import './Nav3.css';
import Logo from "../assets/logo.png";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar3 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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

      {/* Sidebar Menu */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="sidebar__close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul className="sidebar__menu">
          <li>
            <a href="/home">
              <FaHome className="nav-icon" /> Home
            </a>
          </li>
          <li>
            <a href="/about">
              <FaInfoCircle className="nav-icon" /> About Us
            </a>
          </li>
          <li>
            <a href="/contact">
              <FaEnvelope className="nav-icon" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar3;
