import React from "react";
import Hero from "../assets/Hero5.png";
import { Link } from "react-router-dom";

function Join() {
  const index = 1;

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div
        key={index}
        className="absolute inset-0 transition-opacity duration-1000 bg-blue-900"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="text-4xl md:text-6xl lg:text-8xl text-white font-bold mb-4 md:mb-8">
            Join Our Team
          </div>
          <div className="text-lg md:text-2xl text-yellow-500 font-bold mb-8 md:mb-16">
            IF YOU ARE READY TO MAKE A DIFFERENCE IN THE LIVES OF CHILDREN, WE ENCOURAGE YOU TO EXPLORE OUR CAREERS TAB TODAY! WE LOOK FORWARD TO HEARING FROM YOU.
          </div>
          <div className="mb-8 md:mb-16">
            <Link
              to="/admissions"
              className="text-xl md:text-3xl text-white font-bold border-4 p-3 md:p-4 w-full md:w-auto rounded-lg border-yellow-500 inline-block"
            >
              APPLY HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
