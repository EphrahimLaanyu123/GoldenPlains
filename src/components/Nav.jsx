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
      <Link to="/contact">CONTACT US</Link>
    </button>
  );
};

const Navbar = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-sky-900 font-bold p-2">
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
          <div className="">
            <Link to="/">HOME</Link>
          </div>
          <div className="">
            <Link to="/about">ABOUT US </Link>
          </div>
          <div className="">
            <Link to="/admissions">
            ADMISSIONS</Link>
          </div>
          <div className="">
            <Link to="/gallery">GALLERY</Link>
          </div>
          <div className="">
            <Link to="/careers">CAREERS</Link>
          </div>
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
            <div className="cursor-pointer">
              <Link to="/">HOME</Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/about">ABOUT US </Link>
            </div>
            <div className="cursor-pointer">
              <a
                href="https://goldenplainspjs.com/wp-content/uploads/2024/05/JUNIOR-SCHL-ADM-TEMPLATE.docx"
                download
              >
                ADMISSIONS
              </a>
            </div>
            <div className="cursor-pointer">
              <Link to="/gallery">GALLERY</Link>
            </div>
            <div className="cursor-pointer">
              <ContactButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
