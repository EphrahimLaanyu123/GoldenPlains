import React from "react";
import Navbar from "./Nav";
import bgImage from "../assets/Hero5.png";
import './Detail.css'

function DetailPage({ title, message, content }) {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="h-[60vh] bg-slate-300 pt-8 md:pt-52 text-white flex justify-center items-center font-bold text-4xl md:text-8xl relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative z-10">{title}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex pl-4 md:pl-20 pt-10 text-4xl md:text-5xl font-bold text-blue-900">{message}</div>
        <div className="pt-4 md:pr-3" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

export default DetailPage;
