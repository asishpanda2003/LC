// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import image from "../Images/Welcome.webp"; 
import { useLocation,useNavigate } from "react-router-dom";

const Home = () => {
  const location=useLocation();
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-6 bg-gray-100 min-h-screen overflow-hidden">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          LC Online Utility Platform
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Make your plan and start your offline study now.
        </p>
        <Link
          to="/login"
          className="inline-block bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt="Study"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
