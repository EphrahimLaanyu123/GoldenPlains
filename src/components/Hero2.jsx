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
import Navbar3 from "./Nav3";
import applicationFormPDF from "../assets/APPLICATION FOR EMPLOYEMENT FORM.pdf";
import juniorPDF from "../assets/JUNIOR SCHL ADM TEMPLATE.pdf";
import primaryPDF from "../assets/PRIMARY ADMN FORM.pdf";
import "./Hero2.css"; 

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

const Hero2Slider = () => {
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
    <div className="relative w-full h-screen overflow-hidden bg-black font-montserrat">
  <Navbar3 />

  {/* Slider Area */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-text flex flex-col justify-center h-full px-6 lg:px-32 py-8 bg-gradient-to-r from-black/70 to-transparent text-white">
        {/* Text Content */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1">
          {slide.subtitle}
        </h3>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2">
          {slide.title}
        </h1>
        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium mb-2">
          {slide.description}
        </h5>
        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium mb-4">
          {slide.description2}
        </h5>

        {/* Join Us Button */}
        <button
  onClick={() => setIsModalOpen(true)}
  className="join-us"
>
  JOIN US
</button>


      </div>
    </div>
  ))}

  {/* Indicators */}
  <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
    {slides.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full ${
          index === currentIndex ? "bg-slate-500" : "bg-gray-400"
        }`}
      />
    ))}
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 border-4 border-amber-500"
        onClick={(e) => e.stopPropagation()}
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
        <p className="mt-4 text-gray-600 text-sm text-center">
          For inquiries, email us at{" "}
          <a
            href="mailto:infoinfo@goldenplainschool.com"
            className="text-amber-500 font-semibold hover:underline"
          >
            infoinfo@goldenplainschool.com
          </a>
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition-all w-full"
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Hero2Slider;
