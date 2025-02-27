import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../AdminDashbored/Admin.css";
import StageChart from './StageChart';
import PriorityChartTask from "./PriorityChartTask"
import TasksDueChart from './TaskDueChart';


const AdminProgress = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {/* SIDEBAR */}
      <section id="sidebar" className={sidebarVisible ? "show" : ""}>
        <Link to="/" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">Admin</span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/admin/dashboard">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/tasks">
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">Task</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/progress">
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Progress of Task</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/team">
              <i className='bx bxs-message-dots'></i>
              <span className="text">Team</span>
            </Link>
          </li>
          <li>
           
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="/" className="logout">
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className='bx bx-menu' onClick={toggleSidebar}></i>
          <Link to="#" className="nav-link">Categories</Link>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className='bx bx-search'></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden onChange={toggleTheme} checked={darkMode} />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <Link to="#" className="notification">
            <i className='bx bxs-bell'></i>
            <span className="num">8</span>
          </Link>
         
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                  <Link className="active" to="/admin/home">Home</Link>
                </li>
              </ul>
            </div>
           
          </div>
          <div style={{ padding: "20px", marginRight: "80px" }}>
            <div className="row">
              <div className="col-md-12">
                <StageChart />
              </div>
              <div className="col-md-12">
              <PriorityChartTask />
              </div>
            </div>
          </div>
          <div style={{ padding: "20px", justifyContent:"center" }}>
            <div className="row">
              <div className="col-md-6">
                <TasksDueChart/>
              </div>
              
            </div>
          </div>

        
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default AdminProgress;
