import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { Helmet } from "react-helmet";
import Hero1 from "../assets/slides/structure.png";
import Hero2 from "../assets/slides/heroImage3.png";
import Hero3 from "../assets/slides/HeroImage5.png";
import Hero4 from "../assets/HeroImage4.png";
import Hero5 from "../assets/slides/20230510_155205.jpg";
import Hero6 from "../assets/slides/20240804_141716.jpg";
import Navbar3 from "./Nav3";
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
      <Helmet>
        <title>Golden Plains School | Inspiring Future Leaders</title>
        <meta
          name="description"
          content="Golden Plains School: Empowering learners and cultivating tomorrow's leaders. Explore our vision, programs, and application opportunities."
        />
        <meta
          name="keywords"
          content="Golden Plains School, nurturing future, empowering learners, school application, innovative education, inspiring excellence, GoldenPlains, Golden Plains, Goldenplains"
        />
        <meta name="author" content="Golden Plains School" />
        <meta property="og:title" content="Golden Plains School | Inspiring Future Leaders" />
        <meta
          property="og:description"
          content="Empowering learners and cultivating tomorrow's leaders. Experience a blend of tradition and innovation in education."
        />
        <meta property="og:image" content={slides[currentIndex].image} />
        <meta property="og:url" content="https://goldenplainschool.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfZi1Gh_JXl9Wc2-VjLmlcjFMdgnus-ix30-AYDWoe6rUAAqA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
                >
                  Employment Application
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeDKZOFcVdd63NAcwFBwa_kWFc1-PZKnBNRSgAgJN1KTvKNqw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
                >
                  Junior School Application
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTEm4z0iykaDZy7SKGWDUxhgbMkPr4ws7trS5ePj97RloqwQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-amber-500 text-white py-2 px-4 rounded-lg text-center hover:bg-amber-600 transition-all"
                >
                  Primary School Application
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm text-center">
              For inquiries, email us at {" "}
              <a
                href="mailto:info@goldenplainschool.com"
                className="text-amber-500 font-semibold hover:underline"
              >
                info@goldenplainschool.com
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
