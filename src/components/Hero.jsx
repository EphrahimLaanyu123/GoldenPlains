import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import Hero1 from "../assets/slides/structure.png";
import Hero2 from "../assets/slides/heroImage3.png";
import Hero3 from "../assets/slides/HeroImage5.png";
import Hero4 from "../assets/HeroImage4.png";
import Hero5 from "../assets/slides/20230510_155205.jpg";
import Hero6 from "../assets/slides/20240804_141716.jpg";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import './Hero.css'; 
import applicationFormPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";  
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import Modal from "./Modal"; // Import Modal component

const slides = [
  {
    image: Hero1,
    title: "FUTURE",
    subtitle: "NURTURING THE",
    description: "Empowering Learners,  ",
    description2: "Nurturing Tomorrow's Society",
    description3: "",
    buttonText: "Learn More",
  },
  {
    image: Hero2,
    title: "Inspiring",
    subtitle: "Cultivating Excellence",
    description: "Fostering a nurturing environment where students excel.",
    description2: "Experience a blend of tradition and innovation in education.",
    description3: "",
    buttonText: "Explore Our Vision",
  },
  {
    image: Hero3,
    title: "Innovatively",
    subtitle: "Shaping Tomorrow's Leaders",
    description: "Providing tools and resources for the leaders of tomorrow.",
    description2: "Embrace a future full of possibilities with us.",
    description3: "",
    buttonText: "Learn More",
  },
  {
    image: Hero4,
    title: "FUTURE",
    subtitle: "NURTURING THE",
    description: "Empowering Learners,  ",
    description2: "Nurturing Tomorrow's Society",
    description3: "",
    buttonText: "Learn More",
  },
  {
    image: Hero5,
    title: "Inspiring",
    subtitle: "Cultivating Excellence",
    description: "Fostering a nurturing environment where students excel.",
    description2: "Experience a blend of tradition and innovation in education.",
    description3: "",
    buttonText: "Explore Our Vision",
  },
  {
    image: Hero6,
    title: "Innovatively",
    subtitle: "Shaping Tomorrow's Leaders",
    description: "Providing tools and resources for the leaders of tomorrow.",
    description2: "Embrace a future full of possibilities with us.",
    description3: "",
    buttonText: "Learn More",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="mainnn relative w-full h-[70vh] md:h-[80vh] lg:h-[100vh] myfont overflow-hidden">
      <Nav2 />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity slide-transition ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="myfont flex flex-col justify-center h-full px-6 lg:px-32 py-8 bg-gradient-to-r from-slate-900 via-transparent to-transparent text-white">
            <h3 className=" slide-subtitle text-xl md:text-3xl lg:text-5xl mb-1">
              {slide.subtitle}
            </h3>
            <h1 className=" slide-subtitle text-3xl md:text-6xl lg:text-9xl font-bold mb-2">
              {slide.title}
            </h1>
            <h5 className="slide-subtitle text-lg md:text-2xl lg:text-4xl mb-2">
              {slide.description}
            </h5>
            <h5 className="slide-subtitle text-lg md:text-2xl lg:text-4xl mb-2">
              {slide.description2}
            </h5>
            <h5 className="slide-subtitle text-lg md:text-2xl lg:text-4xl mb-2">
              {slide.description3}
            </h5>
          </div>
        </div>
      ))}

      <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75"
        >
          <FaChevronLeft className="text-sm md:text-lg lg:text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-2 md:p-4 rounded-full hover:bg-opacity-75"
        >
          <FaChevronRight className="text-sm md:text-lg lg:text-xl" />
        </button>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-2 rounded-full ${
              index === currentIndex ? "bg-slate-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>



      <button
        onClick={openModal} // Open modal when "Join Us" is clicked
        className="join-us bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        JOIN US
      </button>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl mb-4">Join Us!</h2>
        <p className="mb-4">
          To be sent to{" "}
          <a href="mailto:info@goldenplainschool.com" className="modal-email">
            info@goldenplainschool.com
          </a>
        </p>
        <a
          href={juniorPDF}
          download="Junior_School_Application"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Download Junior School Form
        </a>
        <a
          href={primaryPDF}
          download="Primary_School_Application"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2"
        >
          Download Primary School Form
        </a>
      </Modal>
    </div>
  );
};

export default HeroSlider;
