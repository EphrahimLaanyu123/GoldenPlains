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
import "./Hero.css"; 
import applicationFormPDF from "../assets/APPLICATION FOR EMPLOYEMENT FORM.pdf";
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/PRIMARY ADMN FORM.pdf";

const slides = [
  {
    image: Hero1,
    title: "FUTURE",
    subtitle: "NURTURING THE",
    description: "Empowering Learners,",
    description2: "Nurturing Tomorrow's Society",
    buttonText: "Learn More",
  },
  {
    image: Hero2,
    title: "Inspiring",
    subtitle: "Cultivating Excellence",
    description: "Fostering a nurturing environment where students excel.",
    description2: "Experience a blend of tradition and innovation in education.",
    buttonText: "Explore Our Vision",
  },
  {
    image: Hero3,
    title: "Innovatively",
    subtitle: "Shaping Tomorrow's Leaders",
    description: "Providing tools and resources for the leaders of tomorrow.",
    description2: "Embrace a future full of possibilities with us.",
    buttonText: "Learn More",
  },
  {
    image: Hero4,
    title: "FUTURE",
    subtitle: "NURTURING THE",
    description: "Empowering Learners,",
    description2: "Nurturing Tomorrow's Society",
    buttonText: "Learn More",
  },
  {
    image: Hero5,
    title: "Inspiring",
    subtitle: "Cultivating Excellence",
    description: "Fostering a nurturing environment where students excel.",
    description2: "Experience a blend of tradition and innovation in education.",
    buttonText: "Explore Our Vision",
  },
  {
    image: Hero6,
    title: "Innovatively",
    subtitle: "Shaping Tomorrow's Leaders",
    description: "Providing tools and resources for the leaders of tomorrow.",
    description2: "Embrace a future full of possibilities with us.",
    buttonText: "Learn More",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
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
            <h3 className="slide-subtitle text-xl md:text-3xl lg:text-5xl mb-1">
              {slide.subtitle}
            </h3>
            <h1 className="slide-subtitle text-3xl md:text-6xl lg:text-9xl font-bold mb-2">
              {slide.title}
            </h1>
            <h5 className="slide-subtitle text-lg md:text-2xl lg:text-4xl mb-2">
              {slide.description}
            </h5>
            <h5 className="slide-subtitle text-lg md:text-2xl lg:text-4xl mb-2">
              {slide.description2}
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
        onClick={() => setIsModalOpen(true)}
        className="join-us bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        JOIN US
      </button>

      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-center items-center"
    onClick={() => setIsModalOpen(false)} // Close modal when clicking the overlay
  >
    <div
      className="bg-white p-6 rounded-lg shadow-2xl w-96 border-4 border-amber-500 relative"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    >
      <h2 className="text-2xl font-bold text-amber-600 mb-4 text-center">
        Download Application Forms
      </h2>
      <ul className="space-y-4">
        <li>
        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfZi1Gh_JXl9Wc2-VjLmlcjFMdgnus-ix30-AYDWoe6rUAAqA/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
>
  Employment Application Form
</a>

        </li>
        <li>
          <a
            href={juniorPDF}
            download
            className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
          >
            Junior School Admission Form
          </a>
        </li>
        <li>
          <a
            href={primaryPDF}
            download
            className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
          >
            Primary School Admission Form
          </a>
        </li>
      </ul>
      <p className="mt-6 text-gray-700 text-sm text-center">
        For inquiries or further assistance, please email us at{" "}
        <a
          href="mailto:infoinfo@goldenplainschool.com"
          className="text-amber-500 font-semibold hover:underline"
        >
          infoinfo@goldenplainschool.com
        </a>.
      </p>
      <button
        onClick={() => setIsModalOpen(false)}
        className="mt-6 bg-amber-500 text-white py-2 px-6 rounded-lg text-center w-full font-bold hover:bg-amber-600 transition-all"
      >
        Close
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default HeroSlider;
