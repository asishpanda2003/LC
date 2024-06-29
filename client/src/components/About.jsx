// src/pages/About.js
import React from 'react';
import { FaBookOpen, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-6 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Offline Study</h2>
        <p className="text-lg text-gray-700">
          <FaBookOpen className="inline-block mr-2 text-blue-500" />
          Offline Study is a platform dedicated to helping students enhance their learning experience
          outside the classroom. Our mission is to provide high-quality educational resources,
          study materials, and tools to support students in their academic journey.
        </p>
        <p className="text-lg text-gray-700">
          <FaUsers className="inline-block mr-2 text-blue-500" />
          Whether you're preparing for exams, learning new subjects, or seeking additional study aids,
          Offline Study offers a range of resources tailored to your needs. From comprehensive study guides
          to interactive quizzes, we're here to help you succeed.
        </p>
        <p className="text-lg text-gray-700">
          <FaLightbulb className="inline-block mr-2 text-blue-500" />
          Our team is committed to continuously improving our platform and expanding our content library
          to serve students of all ages and backgrounds. Join us in our mission to make learning accessible,
          engaging, and effective for everyone.
        </p>
        <div className="text-center">
          <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
