// src/component/Footer4.js
import React from "react";
import "../css/Footer4.css";

export default function Footer4() {
  return (
    <footer className="custom-foot">
  <div className="footer-row1">
    <div className="footer-left1">
      <p className="footer-title1">
        Top learning experiences that create more talent in the world.
      </p>
    </div>

    <div className="footer-col">
      <div className="footer-column">
        <h4>Product</h4>
      <p>Overview</p>
      <p>Features</p>
      <p>Solution</p>
      <p>Tutorials</p>
      <p>Pricing</p>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
      <p>About Us</p>
      <p>Carreers</p>
      <p>Press</p>
      <p>News</p>
      </div>
      <div className="footer-column">
        <h4>Social</h4>
      <p>Twitter</p>
      <p>Linkedin</p>
      <p>Github</p>
      <p>Dribble</p>
      </div>
      <div className="footer-column">
        <h4>Legal</h4>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Contact</p>

      </div>
    </div>
  </div>
  



  
  <div className="footer-bott">
    <p className="copyright">© 2024 All rights reserved</p>
    <div className="social-icon">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
  </footer>
  );
}
