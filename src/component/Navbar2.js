import React from "react";
import "../css/Navbar2.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import {FaCircleUser} from "react-icons/fa6";

export default function Navbar2() {
  return (
    <nav className="navbar2">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />        
      </div>
<div className="nav-links">
  <Link to="/index2">Home</Link>
  <Link to="/VideoPage" className="Event-link">Event Planner Video</Link>
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
