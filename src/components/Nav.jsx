import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";

const ContactButton = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:info@goldenplainspjs.com";
  };

  return (
    <button onClick={handleContactClick} className="contact-button">
      CONTACT US
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutSubMenu = () => {
    setAboutSubMenuOpen(!aboutSubMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-and-title">
          <Link to="/">
            <img src={Logo} width={70} alt="Logo" className="logo" />
          </Link>
          <div className="school-title">
            <div>GOLDEN</div>
            <div>PLAINS</div>
            <div>SCHOOL</div>
          </div>
        </div>

        <div className="menu-toggle">
          <button onClick={toggleMenu} className="menu-icon">
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            <Link to="/" className="menu-link">HOME</Link>
            <button onClick={toggleAboutSubMenu} className="menu-link">
              ABOUT US {aboutSubMenuOpen ? "▲" : "▼"}
            </button>
            {aboutSubMenuOpen && (
              <div className="submenu">
                <Link to="/about/why-us" className="submenu-link">Why Us</Link>
                <Link to="/about/arts-sports" className="submenu-link">Arts and Sports</Link>
                {/* Add more sub-links as needed */}
              </div>
            )}
            <a
              href="https://goldenplainspjs.com/wp-content/uploads/2024/05/JUNIOR-SCHL-ADM-TEMPLATE.docx"
              download
              className="menu-link"
            >
              ADMISSIONS
            </a>
            <Link to="/gallery" className="menu-link">GALLERY</Link>
            <div>
              <ContactButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
