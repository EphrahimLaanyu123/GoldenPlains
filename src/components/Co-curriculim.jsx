import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Home from '../../src/assets/home.png'
import Music from "../../src/assets/piano.png"
import Computer from "../../src/assets/computer.png"

function Courriculum() {
  const infoSection = [
    {
      title: "MUSIC AND DRAMA",
      image:Music,
     
    },
    {
      title: "HOME SCIENCE",
      image:Home,
    },
    {
      title: "DIGITAL LITERACY",
      image:Computer,
    },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(infoSection.length, 3), // Show 3 items on larger screens
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(infoSection.length, 2), // Show 2 items between 1024px and 768px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 item on smaller screens
          prevArrow: false, // Hide previous arrow on smaller screens
          nextArrow: false, // Hide next arrow on smaller screens
        },
      },
    ],
  };

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 left-6 z-10 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, marginLeft: "-20px" }} // Adjust margin-left for spacing
        onClick={onClick}
      >
        <FaChevronLeft className="text-3xl text-white bg-gray-800 bg-opacity-50 border-yellow-500 border-4 rounded-full p-2 w-10 h-10" />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 right-6 z-10 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, marginRight: "-20px" }} // Adjust margin-right for spacing
        onClick={onClick}
      >
        <FaChevronRight className="text-3xl text-white bg-opacity-50 border-4 border-yellow-500 bg-gray-800 rounded-full p-2 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-2 bg-orange-100 text-blue-900">
      <div className="font-bold text-4xl text-blue-900 bg-yellow-500 py-2 px-4">
        OUR CO-CURRICULUM
      </div>
      <div className="flex justify-center flex-wrap pt-3 text-blue-900 font-bold text-2xl pl-20 pr-20">
        AT OUR SCHOOL, WE BELIEVE IN LEARNING THAT EXTENDS BEYOND THE CORE
        SUBJECTS OF THE COMPETENCY BASED CURRICULUM (CBC). THAT’S WHY WE OFFER A
        VIBRANT SELECTION OF CLUBS DESIGNED TO SPARK YOUR INTERESTS, TALENTS AND
        CREATIVITY.
      </div>
      <div className="w-full max-w-screen-xl pt-10 pb-10 bg-orange-100 shadow-lg relative">
        <Slider {...settings}>
          {infoSection.map((info, index) => (
            <div
              key={index}
              className="p-2 h-[65vh]"
              style={{ height: "auto", maxWidth: "100%" }}
            >
              <div
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-yellow-500"
                } p-2 shadow-2xl h-full`}
              >
                <img src={info.image} alt="Sports" className="w-full" />
                <div className="font-bold mb-2 pt-4 text-4xl">
                  {info.title}
                  <hr className="border-t-2 w-3/4 border-gray-400 mt-2" />
                </div>
              
                <div className="pt-5 pb-5">
                  <div
                    className={`${
                      index % 2 === 0 ? "bg-yellow-500" : "bg-white"
                    } flex w-48 p-2 shadow-lg font-semibold`}
                  >
                    <Link to={`/about`}>
                      <div>Read More</div>
                    </Link>
                    <div className="pt-1 flex">
                      <FaChevronRight className="" />
                      <FaChevronRight className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Courriculum;
