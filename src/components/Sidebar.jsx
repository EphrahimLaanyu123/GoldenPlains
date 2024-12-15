import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <ul className="p-6 space-y-4">
          <li><a href="#home" className="text-lg hover:underline">Home</a></li>
          <li><a href="#about" className="text-lg hover:underline">About</a></li>
          <li><a href="#services" className="text-lg hover:underline">Services</a></li>
          <li><a href="#contact" className="text-lg hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
