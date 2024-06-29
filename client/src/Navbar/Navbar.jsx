import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in by accessing the local storage or a similar mechanism
    const user = localStorage.getItem('user');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl"><Link to="/">Offline Utility</Link></h1>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/service" className="text-white">
            Service
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          {/* {!loggedInUser && (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
