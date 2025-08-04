// src/pages/DashboardPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "../component/Sidebar1";
import Topbar1 from "../component/Topbar1";
import Footer from "../component/Footer";
import "../css/DashboardPage1.css";

export default function DashboardPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2); // activate second circle
    setTimeout(() => {
      navigate("/Dashboard2"); // 👈 your target route
    }, 500); // delay for visual effect (optional)
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar1 />
      <div className="main-content">
        <Topbar1 />
        <div className="dashboard-body">
          <h2 className="dashboard-heading">Guardian Dashboard</h2>

          {/* Step Indicator */}    
          <div className="step-indicator">
            <span className={`circle ${step >= 1 ? "active" : ""}`}>1</span>
            <span className={`line ${step >= 2 ? "active" : ""}`}></span>
            <span className={`circle ${step >= 2 ? "active" : ""}`}>2</span>
          </div>

          <div className="form-card">
            <h3>Add your child info</h3>
            <form onSubmit={handleNext}>
              <label>Child’s name</label>
              <input type="text" placeholder="Child's name" required />
              <label>Child’s DOB</label>
              <div className="dob-row">
                <select required>
                  <option value="">Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <select required>
                  <option value="">Year</option>
                  {Array.from({ length: 26 }, (_, i) => (
                    <option key={i}>{2000 + i}</option>
                  ))}
                </select>
              </div>
              <label>Grade in School</label>
              <input type="text" placeholder="Grade in school" required />
              <label>Child’s email address</label>
              <input type="email" className="email" placeholder="Child’s email address" required />
              <label>Ascension Date</label>
              <input type="text" placeholder="Ascension Date" required />
              <button type="submit" className="next-btn">Next</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
