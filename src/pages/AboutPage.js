// src/pages/About.js
import React from "react";
import "../css/AboutPage.css";
import Navbar4 from "../component/Navbar4"; 
import Footer4 from "../component/Footer4";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.png";
 // top banner

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar4/>
      <div className="top-banner">
        <img src={image9} alt="Top Banner" className="banner-image" />
      </div>

      <div className="about-section">
        <h1>About Us</h1>
        <p>
          Future powered for your better day. Our students enjoy fun, interactive and
          relevant lessons and are empowered to think beyond the confines of the
          classroom.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>

      <div className="card-section">
        <div className="info-card">
          <img src={image10} alt="Student 1" />
          <div className="text-content">
            <h2>Lorem ipsum dolor sit amet <span className="underline-red">Consecutor</span></h2>
            <p>
             Lorem ipsum dolor sit amet consectetur. Pharetra in leo sem ipsum congue a quis neque ornare. Ullamcorper sem in ac id elementum odio aliquam quis condimentum. Diam elementum cras in blandit nibh massa mauris. Sodales.
            </p>
            <button className="explore-btn">View More</button>
          </div>
        </div>

        <div className="info-card reverse">
          <img src={image11} alt="Student 2" />
          <div className="text-content">
            <h2>Lorem ipsum dolor sit amet <span>consectetur.</span> <span className="underline-red">Tellus arcu integer.</span></h2>
            <p>
             Lorem ipsum dolor sit amet consectetur. Et sit bibendum nec sit tortor posuere mauris proin. Sit scelerisque eget duis aliquam fermentum sit. Id odio amet gravida felis. Posuere sollicitudin est blandit eu eget euismod turpis. Libero..
            </p>
            <button className="explore-btn">View More</button>
          </div>
          
        </div>
        
      </div>
      <Footer4/>
    </div>
  );
}
