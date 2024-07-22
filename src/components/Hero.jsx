import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import Hero1 from "../assets/structure.png";
import Hero2 from "../assets/heroImage3.png";
import Hero5 from "../assets/HeroImage5.png";
import { Link } from "react-router-dom";
import Navbar from "./Nav"; // Import Navbar component
import './Hero.css'; // Import CSS file

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
    title: "Inspiring Minds",
    subtitle: "Cultivating Excellence",
    description: "Fostering a nurturing environment where students excel.",
    description2: "Experience a blend of tradition and innovation in education.",
    description3: "",
    buttonText: "Explore Our Vision",
  },
  {
    image: Hero5,
    title: "Innovative Learning",
    subtitle: "Shaping Tomorrow's Leaders",
    description: "Providing tools and resources for the leaders of tomorrow.",
    description2: "Embrace a future full of possibilities with us.",
    description3: "",
    buttonText: "Learn More",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
      <Navbar />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center h-full px-6 lg:px-32 py-8 bg-gradient-to-r from-slate-900 via-transparent to-transparent text-white">
            <h3 className="text-xl md:text-3xl lg:text-5xl mb-2">
              {slide.subtitle}
            </h3>
            <h1 className="text-3xl md:text-6xl lg:text-9xl font-bold mb-4">
              {slide.title}
            </h1>
            <h5 className="text-lg md:text-2xl lg:text-4xl mb-4">
              {slide.description}
            </h5>
            <h5 className="text-lg md:text-2xl lg:text-4xl mb-4">
              {slide.description2}
            </h5>
            <h5 className="text-lg md:text-2xl lg:text-4xl mb-6">
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

      <Link
        to="/contact"
        className="join-us"
      >
        JOIN US
      </Link>
    </div>
  );
};

export default HeroSlider;
