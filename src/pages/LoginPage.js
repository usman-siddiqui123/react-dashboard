// src/pages/LoginPage.js
import React, { useState } from "react";
import "../css/LoginPage.css";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/Dashboard");
    } else {
      alert("No account found. Please sign up first.");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/Sign");
  };

  return (
    <div className="login-page-container">
      <div className="login-inner-wrapper">
        <img src={logo1} alt="Logo" className="logo-centered" />
        <h2 className="login-title">Sign In</h2>

       <form onSubmit={handleLogin} className="login-form">
  <label>Email:</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <label>Password:</label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <button type="submit" className="login-btn">Login</button>
</form>


        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={handleSignupRedirect}>Sign up</span>
        </p>
        
      </div>

    </div>
  );
}
