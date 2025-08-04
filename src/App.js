// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index1 from "./pages/Index1";
import Navbar from "./component/Navbar";
import Navbar1 from "./component/Navbar1";
import Index2 from "./pages/Index2";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SignPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import DashboardPage1 from "./pages/DashboardPage1";
import Sidebar1 from "./component/Sidebar1";
import Topbar1 from "./component/Topbar1";
import DashboardPage2 from "./pages/DashboardPage2";
import Sidebar2 from "./component/Sidebar2";
import Topbar2 from "./component/Topbar2";
import DashboardPage3 from "./pages/DashboardPage3";
import VideoPage from "./pages/VideoPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";






function App() {
  return (
<Router>
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <Index1 />
        </>
      }
    />
    <Route
      path="/index2"
      element={
        <>
         <Navbar1 />
          <Index2 />
        </>
      }
    />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Sign" element={<SignPage />} />
    <Route path="/Dashboard" element={<DashboardPage />} />
     <Route path="/Dashboard1" element={<DashboardPage1 />} />
      <Route path="/Dashboard2" element={<DashboardPage2 />} />
     <Route path="/Dashboard3" element={<DashboardPage3 />} />
     <Route path="/VideoPage" element={<VideoPage />} />
     <Route path="/ShopPage" element={<ShopPage />} />
     <Route path="/AboutPage" element={<AboutPage />} />
     <Route path="/ContactPage" element={<ContactPage/>} />





  </Routes>
</Router>

  );
}

export default App;
