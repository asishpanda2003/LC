import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; 
import Signup from './components/Signup';
import Login from './components/Login';
import Service from './components/Service';
import Home from './components/Home';
import Contact from './components/Contact'; 
import About from './components/About'; 
import UserData from './components/UserData';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/service' element={<Service/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<UserData/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
