import React, { useState } from "react";
import "../css/LoginPage.css";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    const res = await loginUser(loginData);
    if (res.ok) {
      localStorage.setItem("token", res.data.token || "dummy-token");
      alert("Login successful!");
      navigate("/Dashboard");
    } else {
      alert("Login failed: " + JSON.stringify(res.data));
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
          <input type="email" className="email-holder"  placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <span onClick={handleSignupRedirect}>Sign up</span>
        </p>
      </div>
    </div>
  );
}
