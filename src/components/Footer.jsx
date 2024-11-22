import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import '../index.css';

function Footer() {
  return (
    <div className="bg-sky-900 myfont fz">
      <div className="text-white py-6 px-4 md:px-20">
        <hr className="border-t-8 border-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:px-20"> {/* Adjusted pl-20 to px-16 */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:flex-row md:items-center md:pl-4 text-white pt-4">
            <img src={Logo} className="w-32 h-32 md:w-40 md:h-40" alt="Logo" />
            <div className="text-center md:text-left text-3xl md:text-4xl mt-4 md:mt-0 md:ml-4">
              <div className="font-bold">GOLDEN</div>
              <div className="font-bold">PLAINS</div>
              <div className="font-bold">SCHOOL</div>
            </div>
          </div>

        </div>
        <div className="pt-6 text-white text-center md:text-left">
          <div className="font-bold text-xl">
            <Link to="/about">ABOUT US</Link>
          </div>
          <div className="text-lg md:text-xl">
            <Link to="/about">Mission, Vision, core values, Our Team</Link>
          </div>
        </div>
        <div className="pt-6 text-white text-center md:text-left">
          <div className="font-bold text-xl pb-4">ADMISSIONS</div>
          <div className="text-lg md:text-xl">Kindergarten, Lower Primary, Junior Secondary</div>
        </div>
        <div className="pt-6 text-white text-center md:text-left">
          <div className="font-bold text-xl pb-4">EVENTS</div>
          <div className="text-lg md:text-xl">School Calendar</div>
        </div>
        <div className="pt-6 text-white text-center md:text-left">
          <div className="font-bold text-xl pb-4">CONTACT</div>
          <div className="flex justify-center md:justify-start text-3xl md:text-4xl text-white space-x-4">
            <FaFacebook />
            <AiFillTwitterCircle />
            <RiInstagramFill />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <div className="text-white py-6 px-4 md:px-20">
        <hr className="border-t-8 border-white" />
      </div>
    </div>
  );
}

export default Footer;
