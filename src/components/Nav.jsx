import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const ContactButton = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:info@goldenplainspjs.com";
  };

  return (
    <button
      onClick={handleContactClick}
      className="bg-yellow-500 p-2 rounded-full w-48 font-bold text-sky-900"
    >
      CONTACT US
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent font-bold p-2 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-row justify-between items-center text-white px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} width={70} alt="Logo" className="mr-4" />
          </Link>
          <div className="font-bold text-l leading-tight">
            <div>GOLDEN</div>
            <div>PLAINS</div>
            <div>SCHOOL</div>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-yellow-500">HOME</Link>
          <Link to="/about" className="hover:text-yellow-500">ABOUT US</Link>
          <Link to="/admissions" className="hover:text-yellow-500">ADMISSIONS</Link>
          <Link to="/gallery" className="hover:text-yellow-500">GALLERY</Link>
          <Link to="/careers" className="hover:text-yellow-500">CAREERS</Link>
        </div>
        <div className="hidden md:block">
          <ContactButton />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-sky-900 text-white">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/" className="hover:text-yellow-500">HOME</Link>
            <Link to="/about" className="hover:text-yellow-500">ABOUT US</Link>
            <a
              href="https://goldenplainspjs.com/wp-content/uploads/2024/05/JUNIOR-SCHL-ADM-TEMPLATE.docx"
              download
              className="hover:text-yellow-500"
            >
              ADMISSIONS
            </a>
            <Link to="/gallery" className="hover:text-yellow-500">GALLERY</Link>
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
