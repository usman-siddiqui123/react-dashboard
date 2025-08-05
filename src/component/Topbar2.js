import React from "react";
import "../css/Topbar2.css";

export default function Topbar2() {
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
