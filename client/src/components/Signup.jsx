import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate(); // Hook to navigate

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/signup", {
        mobile: number,
        email,
        password: pass
      });
      toast.success("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (e) {
      toast.error("Signup failed! Please try again.");
      console.log(e);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h1>
        <form className="space-y-6" onSubmit={submit}>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="mobile"
              className="text-sm font-medium text-gray-600"
            >
              Mobile No
            </label>
            <div className="flex items-center px-3 border border-gray-300 rounded-md">
              <FaPhone className="text-gray-400" />
              <input
                type="text"
                id="mobile"
                className="w-full py-2 pl-2 border-0 focus:outline-none focus:ring-0"
                placeholder="Mobile No"
                onChange={(e) => { setNumber(e.target.value) }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <div className="flex items-center px-3 border border-gray-300 rounded-md">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full py-2 pl-2 border-0 focus:outline-none focus:ring-0"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="flex items-center px-3 border border-gray-300 rounded-md">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full py-2 pl-2 border-0 focus:outline-none focus:ring-0"
                placeholder="Password"
                onChange={(e) => { setPass(e.target.value) }}
              />
            </div>
          </div>
          <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign Up
          </button>
          <Link to="/login" className="text-base text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
