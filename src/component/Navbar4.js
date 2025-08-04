// src/component/Navbar4.js
import React from "react";
import "../css/Navbar4.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar4() {
  return (
    <nav className="navbar4">
      <div className="logo-container2">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
<div className="nav-links">
  <Link to="/index2">Home</Link>
  <Link to="/VideoPage" >Event Planner Video</Link>
  <Link to="/ShopPage">Shop</Link>
  <Link to="/AboutPage"className="About-link">About Us</Link>
  <Link to="/ContactPage">Contact Us</Link>
  <Link to="/">FAQ</Link>
</div>
      <div className="right-section2">
        <div className="contact"><FaCircleUser /></div>
        <p> Guardian</p>
      </div>
    </nav>
  );
}
