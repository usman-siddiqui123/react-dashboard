import React, { useState } from "react";
import "../css/LoginPage.css";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/Sign");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="login-container-login">
      <div className="logo-wrapper-login">
        <img src={logo1} alt="Logo" className="outside-logo" />
      </div>

      <form className="login-card-login" onSubmit={handleSubmit}>
        <div className="login-header-login">
          <div className="left-text">Welcome to <span>Ascension</span></div>
          <div className="right-text">No Account? SignUp</div>
        </div>

        <h2 className="login-title-login">Sign In</h2>

        <label>Enter your username or email address</label>
        <input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Enter your Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-footer-login">
          <span className="forgot-password">Forgot password?</span>
          <button type="submit" className="signup-btn">Sign In</button>
        </div>
      </form>
    </div>
  );
}
