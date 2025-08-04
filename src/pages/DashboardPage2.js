import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar3 from "../component/Sidebar3";
import Topbar3 from "../component/Topbar3";
import Footer2 from "../component/Footer2";
import "../css/DashboardPage2.css";

export default function DashboardPage2() {
  const [step, ] = useState(2);  // Step 2 active
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setShowModal(true); // show modal
    setTimeout(() => {
      setShowModal(false);
      navigate("/Dashboard3");
    }, 2000); // hide after 2 sec and navigate
  };

  return (
    <div className="dashboard1-wrapper">
      <Sidebar3 />
      <div className="main1-content">
        <Topbar3 />
        <div className="dashboard1-body">
          <h2 className="dashboard1-heading">Guardian Dashboard</h2>

          {/* Step Indicator */}
          <div className="step-indicator">
            <span className={`circle ${step >= 1 ? "active" : ""}`}>1</span>
            <span className={`line ${step >= 2 ? "active" : ""}`}></span>
            <span className={`circle ${step >= 2 ? "active" : ""}`}>2</span>
          </div>

          <div className="form1-card">
            <h3>Add Villagers</h3>
            <form onSubmit={handleNext}>
              <label>Identify Time Keeper</label>
              <div className="input-row">
                <input type="text" className="form-input" placeholder="Full name" />
                <input type="email" className="form-input email-small" placeholder="Email" />
              </div>

              <label>Identify Candle Reader</label>
              <div className="input-row">
                <input type="text" className="form-input" placeholder="Full name" />
                <input type="email" className="form-input email-small" placeholder="Email" />
              </div>

              <div className="villager-section">
                <span className="count">1/24</span>
                <label>Villagers</label>
                <div className="input-row">
                  <input type="text" className="form-input" placeholder="Full name" required />
                  <input type="email" className="form-input email-small" placeholder="Email" required />
                </div>
                <div className="add-box">
                  <span>Add more villager</span>
                </div>
              </div>

              <div className="btn-group">
                <button type="button" className="prev-btn">Previous</button>
                <button type="submit" className="send-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer2 />
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="checkmark">&#10004;</div>
            <p>Completed!</p>
          </div>
        </div>
      )}
    </div>
  );
}
