import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

const MapComponent = () => {
  return (
    <div
      className="bg-orange-100 flex flex-col md:flex-row font-cormorant justify-center items-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <div className="p-4 md:pl-20 md:pt-16 flex-1 flex flex-col items-center md:items-start">
        <div className="pb-5 font-cormorant text-2xl font-bold text-black-900 text-center md:text-left">
          LOCATION
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.479452082699!2d36.93470707577125!3d-1.4843698985016802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa1e9adc7f505%3A0x2ab0b30c70afeeb6!2sGolden%20Plains%20Academy!5e0!3m2!1sen!2ske!4v1718279140551!5m2!1sen!2ske"
          className="w-full h-64 md:w-900 md:h-450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col p-4 md:p-0 md:pl-52 md:pt-8 flex-1 items-center md:items-start text-center md:text-left">
        <div className="text-3xl md:text-7xl font-bold text-black-900 mt-4 md:mt-0 md:mb-4">
          FIND US!
        </div>
        <div className="text-black-900">
          <p className="text-xl md:text-4xl font-bold">Address</p>
          <p className="text-sm md:text-xl font-thin">Airview Estate, Kitengela</p>
          <p className="text-sm md:text-xl font-thin">P.O Box 589 - 00204 Athi River</p>
          <p className="text-sm md:text-xl font-thin">Tel: 0728 907 526 / 0733 851 123</p>
          <p className="text-sm md:text-xl font-thin">Email: info@goldenplainsjps.com</p>
        </div>
        <div className="text-xl md:text-4xl text-blue-900 flex space-x-4 md:space-x-8 pt-4 md:pt-8 justify-center">
          <FaFacebook />
          <AiFillTwitterCircle />
          <RiInstagramFill />
          <IoLogoYoutube />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
  