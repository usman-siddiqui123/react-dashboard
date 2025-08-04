import React from "react";
import "../css/Sidebar1.css";
import logo from "../assets/logo1.png"; // Replace with your logo path

export default function Sidebar1() {
  return (
    <div className="sidebar1">
      <div className="sidebar1-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="sidebar1-menu">
        <li className="active"> <i class="fa-solid fa-gauge"></i>Dashboard</li>
        <li> <i class="fa-duotone fa-solid fa-person-breastfeeding"></i>Child</li>
        <li><i class="fa-sharp fa-light fa-link-simple"></i>Villager</li>
        <li> <i class="fa-solid fa-shop"></i>Shop</li>
        <li>Foster Ascension Program</li>
        <li>Ascension Rules</li>
        <li>Testimonials</li>
      </ul>
      <div className="logout">
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i>logout</li>
      </div>
    </div>
  );
}
