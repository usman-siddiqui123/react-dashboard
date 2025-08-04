import React from "react";
import "./Navbar.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import {FaCircleUser} from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        
      </div>
<div className="nav-links">
  <Link to="/index2" className="home-link">Home</Link>
  <Link to="/VideoPage">Event Planner Video</Link>
  <Link to="/ShopPage">Shop</Link>
  <Link to="/AboutPage">About Us</Link>
  <Link to="/ContactPage">Contact Us</Link>
  <Link to="/">FAQ</Link>
</div>
    
      <div className="right-section">
        <div className="contact"><FaCircleUser /></div>
        <p> Guardian</p>
      </div>
    </nav>
  );
}
