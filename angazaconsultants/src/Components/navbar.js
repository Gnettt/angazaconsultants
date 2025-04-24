import React from 'react';
import {Link } from "react-router-dom";
import '../index.css';
import logo from "../assets/angazalogo.png";


function Navbar() {
return (
<nav >
<div style={{ display: "flex", alignItems: "center" }}>
<img
src={logo}
alt="Angaza Logo"
style={{ height: "50px", marginRight: "15px" }}
/>
<Link to="/home" style={{ margin: "10px" }}>Home</Link>
<Link to="/login" style={{ margin: "10px" }}>Login</Link>
<Link to="/signup" style={{ margin: "10px" }}>Sign Up</Link>


<ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0 }}>
<li><a href="tel:+254714094572">Call us</a></li>
<li><a href="mailto:angazaconsult@gmail.com">Email us</a></li>
</ul>
</div>
<div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
<h1>Welcome to Angaza Consultants</h1>
<p>Your trusted partner in consultancy services.</p>
</div>
<div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
<h2>Our Services</h2>
<p>We offer a range of consultancy services to meet your needs.</p>
</div>
<div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
<h2>Contact Us</h2>
<p>Get in touch with us for more information.</p>
</div>
</nav>
);
}

export default Navbar;