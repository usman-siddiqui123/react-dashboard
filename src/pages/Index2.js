import React from "react";
import "../css/Index2.css";
import pics2 from "../assets/pics2.png";
import pics3 from "../assets/pics3.jpg";
import { useNavigate } from "react-router-dom";

export default function Index2() {
    const navigate = useNavigate()
const handleFindOutMore = () => {
  navigate("/login");
};
  return (
    <div className="counseling-page">
      <section className="hero-section">
        <div className="hero-content">          
          <img src={pics2} alt="Hero" className="pics2" />
        </div>
      </section>
      <section className="mid-text">
        <h2 className="highlight-text">
            <span className="blue-text">What is an </span> <span className="red-text">Ascension Ceremony?</span>
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur. Metus etiam augue aliquet amet mattis quam arcu et enim. Lobortis sapien pharetra at consectetur nibh pellentesque arcu massa. Urna scelerisque mauris mattis lectus at massa duis. Sit turpis arcu dignissim orci diam.
        </p>
      </section>
      <section className="videos">
  <div className="video-card">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Video 1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="video-card">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
      title="Video 2"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="video-card">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/oUFJJNQGwhk"
      title="Video 3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>
      <section className="side-section">
        <img src={pics3} alt="Side" className="pics3" />
        <div className="side-text">
            <p className="text">Lorem ipsum dolor sit amet</p>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            necessitatibus quidem modi deserunt temporibus, ipsa illum dolorem ea
            accusantium obcaecati fugiat. Deserunt dolore distinctio facilis
            consectetur. Sit doloremque nobis debitis?
          </p>
          <p>✅ Follow our SAC process</p>
          <button className="side-btn" onClick={handleFindOutMore}>Find out more</button>
        </div>
      </section>
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

