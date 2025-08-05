
import React from "react";
import "../css/DashboardPage.css";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
    const navigate = useNavigate();  
    const handleFindOutMore = () => {
      navigate("/Dashboard1");
    };
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-body">
          <h2>Guardian Dashboard</h2>
          <button className="add-child-btn" onClick={handleFindOutMore}>Add Child Info</button>
                <section className="video-section">
  <div className="video-section">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Video 1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="video-section">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
      title="Video 2"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="video-section">
    <iframe
      width="100%"
      height="200"
      src="https://www.youtube.com/embed/oUFJJNQGwhk"
      title="Video 3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>
          </div>
        </div>
      </div>
    
  );
}
