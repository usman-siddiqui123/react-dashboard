import React, { useState } from "react";
import "../css/SignPage.css";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";

export default function SignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    month: "",
    year: "",
    homeAddress: "",
    shippingAddress: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, username, email, password, confirmPassword, phone } = formData;
    if (!first_name || !last_name || !username || !email || !password || !confirmPassword || !phone) {
      alert("Please fill all required fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const payload = {
      first_name,
      last_name,
      username,
      email,
      password,
      phone
    };
    const res = await signupUser(payload);
    if (res.ok) {
      alert("Signup successful!");
      navigate("/Login");
    } else {
      alert("Signup failed: " + JSON.stringify(res.data));
    }
  };
  return (
    <div className="sign-page-container">
      <div className="sign-inner-wrapper">
        <img src={logo1} alt="Logo" className="logo-centered" />
        <form className="sign-card" onSubmit={handleSubmit}>
          <h2 className="signin-title">Sign Up</h2>
          <label>First Name</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
          <label>Last Name</label>
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" className="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <label>Date of Birth</label>
          <div className="dob-row">
            <input type="text" name="month" placeholder="Month" value={formData.month} onChange={handleChange} />
            <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} />
          </div>
          <label>Home Address</label>
          <input type="text" name="homeAddress" value={formData.homeAddress} onChange={handleChange} />
          <label>Shipping Address</label>
          <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} />
          <div className="sign-footer">
            <button className="signup-btn" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
