import React from "react";
import "../css/DashboardPage.css";

export default function Sidebar() {
  return (
    <div className="sidebar-image">
        <img src={require("../assets/logo1.png")} alt="Logo" className="sidebar-logo" />    
    <div className="sidebar">      
      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>Child</li>
        <li>Villager</li>
        <li>Shop</li>
        <li>Foster Ascension Program</li>
        <li>Ascension Rules</li>
        <li>Testimonials</li>
      </ul>
    </div>
    </div>
  );
}
