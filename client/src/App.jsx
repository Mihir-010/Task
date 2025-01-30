import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import TeamLeadDashboard from "./components/TeamLeadDashboard";
import MemberDashboard from "./components/MemberDashboard";
// import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Pages/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teamlead-dashboard" element={<TeamLeadDashboard />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
