import React from "react";
import "../css/DashboardPage3.css";
import Sidebar3 from "../component/Sidebar3";
import Topbar3 from "../component/Topbar3";
import Footer2 from "../component/Footer2";
import { useNavigate } from "react-router-dom";

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

export default function DashboardPage3() {
  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleSendClick = () => {
    navigate("/VideoPage"); // 👈 Redirect to VideoPage
  };

  return (
    <div className="dashboard3-wrapper">
      <Sidebar3 />
      <div className="main3-content">
        <Topbar3 />
        <div className="dashboard3-body">
          <h2 className="dashboard3-heading">Guardian Dashboard</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-wrapper">
                <div className="product-card">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <div className="rating-row">
                    <span className="rating-text">{product.lorem}</span>
                    <span className="rating-star">{product.rating}</span>
                  </div>
                  <div className="price-row">
                    <span className="product-price">{product.price}</span>
                    <span className="time-info">{product.time}</span>
                  </div>
                </div>
                <button className="send-button" onClick={handleSendClick}>Send</button>
              </div>
            ))}
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
