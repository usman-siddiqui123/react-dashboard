import React from "react";
import "../css/VideoPage.css";
import Navbar2 from "../component/Navbar2";


export default function VideoPage() {
  return (
    <div className="video-page">
      <Navbar2 />
      <div className="video-section">
        <div className="video-wrapper">
          <div className="video-sidebar">
            <div className="video-thumbnail">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" />
              <div className="play-button">&#9658;</div>
            </div>
            <div className="video-thumbnail">
              <video src="https://www.w3schools.com/html/movie.mp4" />
              <div className="play-button">&#9658;</div>
            </div>
            <div className="video-thumbnail">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" />
              <div className="play-button">&#9658;</div>
            </div>
          </div>

          <div className="main-video">
            <video controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="main-play-button">&#9658;</div>
          </div>
        </div>
      </div>
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
  


</footer>
  {/* Bottom bar section */}
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
      
    </div>
  );
}
