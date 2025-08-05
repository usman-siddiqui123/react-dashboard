import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignPage.css";
import logo1 from "../assets/logo1.png";

export default function SignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user to localStorage
    localStorage.setItem("authUser", JSON.stringify({ email, password }));
    alert("Signup successful! Now login.");
    navigate("/Login");
  };

  return (
    <div className="sign-page-container">
      <div className="sign-inner-wrapper">
        <img src={logo1} alt="Logo" className="logo-centered" />

        <form className="sign-card" onSubmit={handleSubmit}>
          <h2 className="signin-title">Sign Up</h2>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
