import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
       <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
      <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/events">EVENTS</Link></li>
        <li><Link to="/pandits">PANDITS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="auth-buttons">
  <button className="login-btn">Login</button>
  <button className="register-btn">Register</button>
</div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
