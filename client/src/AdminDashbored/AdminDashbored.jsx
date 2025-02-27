

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../AdminDashbored/Admin.css";
// import StatsCard from './StatsCard';
// import TaskTable from './TaskTable';
// import StageChart from './StageChart';
// import PriorityChartTask from './PriorityChartTask';
// import TeamList from './TeamList';

// const AdminDashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div style={{ background: darkMode ? "#1e1e1e" : "#ffffff", color: darkMode ? "#ffffff" : "#333" }}>
//       {/* SIDEBAR */}
//       <section id="sidebar" className={sidebarVisible ? "show" : ""} style={{ background: darkMode ? "#222" : "#f8f8f8" }}>
//         <Link to="/" className="brand" style={{ color: "#ff0000" }}>
//           <i className='bx bxs-smile'></i>
//           <span className="text">Admin</span>
//         </Link>
//         <ul className="side-menu top">
//           <li className="active">
//             <Link to="/admin/dashboard" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-dashboard'></i>
//               <span className="text">Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/tasks" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-shopping-bag-alt'></i>
//               <span className="text">Task</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/progress" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-doughnut-chart'></i>
//               <span className="text">Progress of Task</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/team" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-message-dots'></i>
//               <span className="text">Team</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/profile" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-group'></i>
//               <span className="text">Profile</span>
//             </Link>
//           </li>
//         </ul>
//         <ul className="side-menu">
//           <li>
//             <Link to="/" className="logout" style={{ color: "#ff0000" }}>
//               <i className='bx bxs-log-out-circle'></i>
//               <span className="text">Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </section>
//       {/* SIDEBAR */}

//       {/* CONTENT */}
//       <section id="content">
//         {/* NAVBAR */}
//         <nav style={{ background: darkMode ? "#333" : "#ffffff", color: darkMode ? "#ffffff" : "#333" }}>
//           <i 
//             className='bx bx-menu' 
//             onClick={toggleSidebar} 
//             style={{ cursor: "pointer", color: "#ff0000", fontSize: "24px" }}>
//           </i>
          
//           <Link to="#" className="nav-link" style={{ color: "#ff0000" }}>Categories</Link>
          
//           <form action="#">
//             <div className="form-input">
//               <input type="search" placeholder="Search..." style={{ background: darkMode ? "#444" : "#f4f4f4", color: darkMode ? "#ffffff" : "#333" }} />
//               <button type="submit" className="search-btn" style={{ background: "#ff0000", color: "#ffffff" }}>
//                 <i className='bx bx-search'></i>
//               </button>
//             </div>
//           </form>

//           <div onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "20px", marginLeft: "15px" }}>
//             {darkMode ? "🌙" : "🌞"}
//           </div>

//           <Link to="#" className="notification" style={{ color: "#ff0000" }}>
//             <i className='bx bxs-bell'></i>
//             <span className="num" style={{ background: "#ff0000" }}>8</span>
//           </Link>

//           <Link to="/admin/profile" className="profile">
//             <img src="img/people.png" alt="Profile" style={{ borderRadius: "50%", border: "2px solid #ff0000" }} />
//           </Link>
//         </nav>
//         {/* NAVBAR */}

//         {/* MAIN */}
//         <main>
//           <div className="head-title">
//             <div className="left">
//               <h1>Dashboard</h1>
//               <ul className="breadcrumb">
//                 <li>
//                   <Link to="/admin/dashboard" style={{ color: "#ff0000" }}>Dashboard</Link>
//                 </li>
//                 <li><i className='bx bx-chevron-right'></i></li>
//                 <li>
//                   <Link className="active" to="/admin/home" style={{ color: "#ff0000" }}>Home</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <StatsCard />
//           <TaskTable />
          
//           <div style={{ padding: "20px", marginRight: "80px" }}>
//             <div className="row">
//               <div className="col-md-6">
//                 <StageChart />
//               </div>
//               <div className="col-md-6">
//                 <PriorityChartTask />
//               </div>
//             </div>
//           </div>
          
//           <TeamList />
//         </main>
//         {/* MAIN */}
//       </section>
//       {/* CONTENT */}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../AdminDashbored/Admin.css";
import StatsCard from './StatsCard';
import TaskTable from './TaskTable';
import StageChart from './StageChart';
import PriorityChartTask from './PriorityChartTask';
import TeamList from './TeamList';

const AdminDashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    light: {
      background: "#ffffff",
      color: "#333",
      sidebarBackground: "#f8f8f8",
      sidebarColor: "#333",
      navBackground: "#ffffff",
      navColor: "#333",
      searchBackground: "#f4f4f4",
      searchColor: "#333",
      cardBackground: "#f8f8f8",
      cardColor: "#333",
    },
    dark: {
      background: "#1e1e1e",
      color: "#ffffff",
      sidebarBackground: "#222",
      sidebarColor: "#ffffff",
      navBackground: "#333",
      navColor: "#ffffff",
      searchBackground: "#444",
      searchColor: "#ffffff",
      cardBackground: "#2c2c2c",
      cardColor: "#ffffff",
    },
  };

  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  return (
    <div style={{ background: currentTheme.background, color: currentTheme.color, minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <section 
        id="sidebar" 
        className={sidebarVisible ? "show" : ""} 
        style={{ 
          background: currentTheme.sidebarBackground, 
          color: currentTheme.sidebarColor,
          transition: "all 0.3s ease",
        }}
      >
        <Link to="/" className="brand" style={{ color: "#ff6b6b" }}>
          <i className='bx bxs-smile'></i>
          <span className="text">Admin</span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/admin/dashboard" style={{ color: "#ff6b6b" }}>
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/tasks" style={{ color: "#ff6b6b" }}>
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">Task</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/progress" style={{ color: "#ff6b6b" }}>
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Progress of Task</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/team" style={{ color: "#ff6b6b" }}>
              <i className='bx bxs-message-dots'></i>
              <span className="text">Team</span>
            </Link>
          </li>
          <li>
           
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="/" className="logout" style={{ color: "#ff6b6b" }}>
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
        <nav style={{ 
          background: currentTheme.navBackground, 
          color: currentTheme.navColor,
          padding: "10px 20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <i 
            className='bx bx-menu' 
            onClick={toggleSidebar} 
            style={{ 
              cursor: "pointer", 
              color: "#ff6b6b", 
              fontSize: "24px",
              transition: "color 0.3s ease",
            }}
          ></i>
          
          <Link to="#" className="nav-link" style={{ color: "#ff6b6b" }}>Categories</Link>
          
          <form action="#">
            <div className="form-input">
              <input 
                type="search" 
                placeholder="Search..." 
                style={{ 
                  background: currentTheme.searchBackground, 
                  color: currentTheme.searchColor,
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  outline: "none",
                  transition: "all 0.3s ease",
                }} 
              />
              <button 
                type="submit" 
                className="search-btn" 
                style={{ 
                  background: "#ff6b6b", 
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                <i className='bx bx-search'></i>
              </button>
            </div>
          </form>

          <div 
            onClick={toggleTheme} 
            style={{ 
              cursor: "pointer", 
              fontSize: "20px", 
              marginLeft: "15px",
              transition: "transform 0.3s ease",
            }}
          >
            {darkMode ? "🌙" : "🌞"}
          </div>

          <Link to="#" className="notification" style={{ color: "#ff6b6b" }}>
            <i className='bx bxs-bell'></i>
            <span className="num" style={{ background: "#ff6b6b" }}>8</span>
          </Link>

          <Link to="/admin/profile" className="profile">
            <img 
              src="img/people.png" 
              alt="Profile" 
              style={{ 
                borderRadius: "50%", 
                border: "2px solid #ff6b6b",
                transition: "border 0.3s ease",
              }} 
            />
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
                  <Link to="/admin/dashboard" style={{ color: "#ff6b6b" }}>Dashboard</Link>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                  <Link className="active" to="/admin/home" style={{ color: "#ff6b6b" }}>Home</Link>
                </li>
              </ul>
            </div>
          </div>

          <StatsCard theme={currentTheme} />
          <TaskTable theme={currentTheme} />
          
          <div style={{ padding: "20px", marginRight: "80px" }}>
            <div className="row">
              <div className="col-md-6">
                <StageChart theme={currentTheme} />
              </div>
              <div className="col-md-6">
                <PriorityChartTask theme={currentTheme} />
              </div>
            </div>
          </div>
          
          <TeamList theme={currentTheme} />
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default AdminDashboard;