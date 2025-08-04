// src/component/Topbar1.js
import React from "react";
import "../css/Topbar1.css";
// make sure logo1.png is in public or assets

export default function Topbar1() {
  return (
    <div className="topbar1">
      <div className="topbar-left">
        
        <div className="topbar-text">
          <div className="topbar-hello">Hello, Lekan</div>
          <div className="topbar-subtext">Have a nice day</div>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-notification">
          🔔
        </div>
        <div className="topbar-user"><option>Lekan Okkesoso</option></div>
      </div>
    </div>
  );
}
