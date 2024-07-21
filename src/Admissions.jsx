import React from "react";
import Navbar from "./components/Nav";
import bgImage from "./assets/Hero5.png";

function Admissions() {
  const title = "Admissions";
  const message = "Admissions";
  return (
    <div>
      <Navbar />
      <div
        className="h-[40vh] relative flex justify-center items-center font-bold text-4xl md:text-8xl text-white pt-8 md:pt-52"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative z-10">{title}</div>
      </div>
      <div>
        <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
          <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
            <div className="flex justify-center mb-4">
              <div className="max-w-3xl p-1 w-65 bg-yellow-500 text-center font-bold text-blue-900">
                {message}
              </div>
            </div>
            <div className="flex justify-center pt-4 text-blue-900 font-bold px-4 consistent-font">
              {/* <div
              className="max-w-screen-lg w-full px-4"
              dangerouslySetInnerHTML={{ __html: mission }}
            ></div> */}
            </div>
            <div className="text-blue-900">
              <div className="flex justify-center pt-4 font-bold">KINDERGARTEN</div>
              <div className="flex justify-center pt-4 font-bold">LOWER PRIMARY</div>
              <div className="flex justify-center pt-4 font-bold">JUNIOR SECONDARY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
