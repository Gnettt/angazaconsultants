import React from 'react';
import '../index.css';
import logo from '../assets/angazalogo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#signup">Signup</a></li>
          <li><a href="tel:+254714094572">Call us</a></li>
          <li><a href="mailto:angazaconsult@gmail.com">Email us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;