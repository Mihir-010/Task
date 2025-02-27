

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../AdminDashbored/Admin.css";
import StatsCard from './StatsCard';
import TaskTable from './TaskTable';
import StageChart from './StageChart';
import PriorityChartTask from './PriorityChartTask';
import TeamList from './TeamList';
import TeamCard from './TeamCard';

const AdminTeam = () => {
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
            <Link to="/logout" className="logout">
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
          <Link to="/admin/profile" className="profile">
            <img src="img/people.png" alt="Profile" />
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

          
          
          
          <TeamList />
          <TeamCard/>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default AdminTeam;
