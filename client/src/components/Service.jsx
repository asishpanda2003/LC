import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold text-blue-700 mb-10">Our Services</h1>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full max-w-3xl">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Offline Study Programs</h2>
              <p className="text-gray-600 mb-6">
                Our offline study programs are designed to provide comprehensive and personalized learning experiences. We offer a range of courses that cater to different learning needs and preferences.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">Features:</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Expert instructors with years of teaching experience</li>
                  <li>Small class sizes for personalized attention</li>
                  <li>Hands-on learning with practical applications</li>
                  <li>Comprehensive study materials and resources</li>
                  <li>Regular assessments to track progress</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">Benefits:</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Improved understanding and retention of subjects</li>
                  <li>Interactive and engaging learning environment</li>
                  <li>Networking opportunities with peers and instructors</li>
                  <li>Flexible scheduling to accommodate busy lifestyles</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Contact us to learn more and enroll in our offline study programs.
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Additional Resources</h2>
              <p className="text-gray-600 mb-6">
                For more information and resources, please check out the following links:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>
                  <a
                    href="https://example.com/offline-study-guide"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Offline Study Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.microsoft.com/en-us/answers/questions/1153631/offline-studycl"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tips for Success in Offline Studies
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/course-catalog"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course Catalog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
