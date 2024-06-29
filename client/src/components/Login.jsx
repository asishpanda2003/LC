import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const navigate = useNavigate(); // Hook to navigate

  async function submit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/user/login", {
        email,
        password: pass
      });

      if (data.success) {
        localStorage.setItem("token", data.token); 
        localStorage.setItem('userEmail', data.email);// Save the token to localStorage
        toast.success("Login successful! Redirecting to user data...");
        navigate("/userdata"); // Redirect to user data page
      } else {
        toast.error("Login failed! Please check your credentials.");
      }
    } catch (error) {
      toast.error("Login failed! Please check your credentials.");
      console.error('AxiosError:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        <form className="space-y-6" onSubmit={submit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center px-3 border border-gray-300 rounded-md">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full py-2 pl-2 border-0 focus:outline-none focus:ring-0"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center px-3 border border-gray-300 rounded-md">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full py-2 pl-2 border-0 focus:outline-none focus:ring-0"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
          <Link to="/signup" className="text-base text-blue-500 hover:underline">
            New user? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
