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
    <div className="bg-sky-900 myfont">
      <div className="text-white py-6 pl-4 pr-4 md:pl-20 md:pr-20">
        <hr className="border-t-8 border-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:pl-20">
        <div className="md:col-span-2">
          <div className="text-balance">
            <div className="pl-4 flex pt-4 text-white">
              <img src={Logo} style={{ width: 170, height: 170 }} alt="Logo" />
              <div className="text-3xl md:text-4xl pt-7 md:pt-0 md:pl-4">
                <div className="font-bold">GOLDEN</div>
                <div className="font-bold">PLAINS</div>
                <div className="font-bold">SCHOOL</div>
              </div>
            </div>
            
          </div>
          <div className="text-white pl-4 md:pl-20 pt-6">
            <p className="text-3xl md:text-4xl font-bold">
              <Link to="/about" className="text-white">ABOUT US</Link> {/* Link to /about */}
            </p>
            <p className="text-lg md:text-xl font-thin">Mission, Vision, core values, Our Team</p>
          </div>
          <div className="text-white py-6 pl-4 md:pl-20 pr-4 md:pr-20">
            <div className="text-3xl md:text-4xl text-white flex pt-6">
              <FaFacebook />
              <AiFillTwitterCircle className="ml-4" />
              <RiInstagramFill className="ml-4" />
              <IoLogoYoutube className="ml-4" />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4 md:pl-20 pt-6 text-white">
          <div className="font-bold text-xl pb-4"><Link to="/about">ABOUT US</Link></div>
          <div>
            <div className="text-lg md:text-xl pb-2">
              <Link to="/about">
              Mission, Vision, core values, Our Team
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4 md:pl-20 pt-6 text-white">
          <div className="font-bold text-xl pb-4">ADMISSIONS</div>
          <div>
            <div className="text-lg md:text-xl pb-2">
              Kindergarten, Lower Primary, Junior Secondary
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4 md:pl-20 pt-6 text-white">
          <div className="font-bold text-xl pb-4">EVENTS</div>
          <div>
            <div className="text-lg md:text-xl pb-2">
              School Calendar
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4 md:pl-20 pt-6 text-white">
          <div className="font-bold text-xl pb-4">CONTACT</div>
          <div>
            <div className="text-lg md:text-xl pb-2">
              {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white py-6 pl-4 pr-4 md:pl-20 md:pr-20">
        <hr className="border-t-8 border-white" />
      </div>
    </div>
  );
}

export default Footer;
