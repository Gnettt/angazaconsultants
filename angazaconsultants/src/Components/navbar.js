import React from 'react';
import {  NavLink } from "react-router-dom";
import '../index.css';


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/angazaconsultants/assets/angazalogo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><NavLink to="/signup" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Signup</NavLink></li>
          <li><a href="tel:+254714094572">Call us</a></li>
          <li><a href="mailto:angazaconsult@gmail.com">Email us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;