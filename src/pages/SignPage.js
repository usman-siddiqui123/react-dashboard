import React, { useState } from "react";
import "../css/SignPage.css";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

export default function SignPage() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    month: "",
    year: "",
    homeAddress: "",
    shippingAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username,
      month,
      year,
      homeAddress,
      shippingAddress,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      username &&
      month &&
      year &&
      homeAddress &&
      shippingAddress &&
      email &&
      password &&
      confirmPassword
    ) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // All good, proceed
      navigate("/Dashboard");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="sign-page-container">
      <div className="sign-inner-wrapper">
        <img src={logo1} alt="Logo" className="logo-centered" />

        <form className="sign-card" onSubmit={handleSubmit}>
          <div className="sign-header">
            <div className="left-text">Welcome to Ascension</div>
            <div className="right-text">Already have an account?</div>
          </div>

          <h2 className="signin-title">Sign Up</h2>

          <label>Enter your username or email address</label>
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Date of Birth</label>
          <div className="dob-row">
            <input
              type="text"
              name="month"
              placeholder="Month"
              value={formData.month}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <label>Home Address</label>
          <input
            type="text"
            name="homeAddress"
            placeholder="Home Address"
            value={formData.homeAddress}
            onChange={handleChange}
            required
          />

          <label>Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            placeholder="Shipping Address"
            value={formData.shippingAddress}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="sign-footer">
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
