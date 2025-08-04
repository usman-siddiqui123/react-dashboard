// src/component/Navbar4.js
import React from "react";
import "../css/Navbar5.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar5() {
  return (
    <nav className="navbar5">
      <div className="logo-container5">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
<div className="nav-links5">
  <Link to="/index2">Home</Link>
  <Link to="/VideoPage" >Event Planner Video</Link>
  <Link to="/ShopPage">Shop</Link>
  <Link to="/AboutPage">About Us</Link>
  <Link to="/ContactPage" className="Contact-link">Contact Us</Link>
  <Link to="/">FAQ</Link>
</div>
      <div className="right-section5">
        <div className="contact"><FaCircleUser /></div>
        <p> Guardian</p>
      </div>
    </nav>
  );
}
