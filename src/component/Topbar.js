// src/component/Topbar.js
import React from "react";
import "../css/DashboardPage.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">Hello, Lekan <br /><span className="greeting">Have a nice day</span></div>
      <div className="right">
        <div className="notification-wrapper">
  <i className="fas fa-bell notification-icon"></i>
</div>
        <span className="icon">🔒</span>
        <span className="user">Lekan Okewo<br /><small>Admin</small></span>
      </div>
    </div>
  );
}
