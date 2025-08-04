import React from "react";
import "../css/ShopPage.css";
import "../component/Navbar3";
import gift1 from "../assets/gift1.png";
import gift2 from "../assets/gift2.png";
import gift3 from "../assets/gift3.png";
import Navbar3 from "../component/Navbar3";

import product1 from "../assets/image1.png";
import product2 from "../assets/image2.png";
import product3 from "../assets/image3.png";
import product4 from "../assets/image4.png";
import product5 from "../assets/image5.png";
import product6 from "../assets/image6.png";
import product7 from "../assets/image7.png";
import product8 from "../assets/image8.png";

const products = [
  { id: 1, title: "Lorem ipsum dolor sit amet consectetur. Et.", image: product1, rating:"⭐ 4.0", lorem: "lorem",price: "₹200", time: "20Mins",},
  { id: 2, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product2,rating:"⭐ 3.2", lorem: "lorem", price: "₹200", time: "20Mins",},
  { id: 3, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product3,rating:"", lorem: "lorem ipsum", price: "₹200", time: "20Mins",},
  { id: 4, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product4,rating:"", lorem: "lorem", price: "₹200", time: "25Mins",},
  { id: 5, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product5,rating:"⭐ 4.5", lorem: "lorem ipsum dolor", price: "₹200", time: "20Mins",},
  { id: 6, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product6,rating:"⭐ 4.8", lorem: "lorem ipsum dolor", price: "₹200", time: "20Mins",},
  { id: 7, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product7,rating:"", lorem: "lorem ipsum dolor sit", price: "₹209", time: "Delivery",},
  { id: 8, title: "Lorem ipsum dolor sit amet consectetur. Enim.", image: product8,rating:"", lorem: "lorem ipsum", price: "₹180", time: "Delivery",},
];

export default function ShopPage() {
    
  return (
    <div className="gift-page">
        <Navbar3/>
    <div className="gift-section">
        
      <div className="gift-text">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="gift-images">
        <img  src={gift1} alt="gift1" />
        <img className="gifts" src={gift2} alt="gift2" />

        <img src={gift3} alt="gift3" />
      </div>
      </div>
        <div className="dash-wrapper">
            
            <div className="main3-cont">
              
              <div className="dash-body">
                <h2 className="dash-heading">Gift Items</h2>
                <div className="prod-grid">
                  {products.map((product) => (
                    <div key={product.id} className="prod-wrapper">
                      <div className="prod-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <div className="rat-row">
                          <span className="rating-text">{product.lorem}</span>
                          <span className="rating-star">{product.rating}</span>
                        </div>
                        <div className="price-row">
                          <span className="product-price">{product.price}</span>
                          <span className="time-info">{product.time}</span>
                        </div>
                      </div>
                      <button className="send-button">Send</button>
                    </div>
                  ))}
                </div>
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
