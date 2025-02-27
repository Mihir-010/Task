
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBell, FaUser, FaSignOutAlt, FaCalendarAlt, FaTasks, FaClock, FaFlag, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const statuses = ["todo", "in-progress", "completed"];
const priorityColors = {
  high: "linear-gradient(to right, #ff6b6b, #ff3838)",
  medium: "linear-gradient(to right, #ff9f43, #ff7f50)",
  low: "linear-gradient(to right, #4cd137, #44bd32)",
};

const statusIcons = {
  todo: <FaClock style={{ marginRight: "5px" }} />,
  "in-progress": <FaExclamationCircle style={{ marginRight: "5px" }} />,
  completed: <FaCheckCircle style={{ marginRight: "5px" }} />,
};

function MemberDashboard() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [statusCounts, setStatusCounts] = useState({});
  const [priorityCounts, setPriorityCounts] = useState({ labels: [], datasets: [{ label: "", data: [] }] });
  const [dueDateTasks, setDueDateTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser) navigate("/signin");
    else setUser(loggedInUser);

    // Fetch tasks
    axios.get("http://localhost:3000/api/tasks/all")
      .then((response) => {
        setTasks(response.data.tasks);
        setFilteredTasks(response.data.tasks);
      })
      .catch((error) => console.error("Error fetching tasks:", error));

    // Fetch task status counts
    axios.get("http://localhost:3000/api/tasks/stage/counts")
      .then((response) => {
        setStatusCounts(response.data.data.statusCounts);
      })
      .catch((error) => console.error("Error fetching status counts:", error));

    // Fetch priority counts
    axios.get("http://localhost:3000/api/tasks/counts/Priority")
      .then((response) => {
        setPriorityCounts(response.data.data);
      })
      .catch((error) => console.error("Error fetching priority counts:", error));

    // Fetch due date tasks
    axios.get("http://localhost:3000/api/tasks/due/tasks")
      .then((response) => {
        setDueDateTasks(response.data.tasks);
      })
      .catch((error) => console.error("Error fetching due date tasks:", error));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  // Chart data for task status counts
  const statusChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Task Count",
        data: Object.values(statusCounts),
        backgroundColor: ["#ff6b6b", "#ff9f43", "#4cd137"],
        borderColor: ["#ff3838", "#ff7f50", "#44bd32"],
        borderWidth: 1,
      },
    ],
  };

  // Chart data for priority counts
  const priorityChartData = {
    labels: priorityCounts.labels,
    datasets: [
      {
        label: priorityCounts.datasets[0]?.label || "Task Count",
        data: priorityCounts.datasets[0]?.data || [],
        backgroundColor: ["#8a7efb", "#ff9f43", "#4cd137"],
        borderColor: ["#6a5acd", "#ff7f50", "#44bd32"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "linear-gradient(to right, #f4f7f6, #e2e8e7)" }}>
      <Navbar user={user} logout={logout} showProfileMenu={showProfileMenu} setShowProfileMenu={setShowProfileMenu} />
      <KanbanBoard tasks={filteredTasks} />
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", flexWrap: "wrap" }}>
        <div style={{ width: "45%", background: "linear-gradient(to right, #ffffff, #f8f9fa)", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Task Status Distribution</h3>
          <Bar data={statusChartData} />
        </div>
        <div style={{ width: "45%", background: "linear-gradient(to right, #ffffff, #f8f9fa)", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Task Priority Distribution</h3>
          <Pie data={priorityChartData} />
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Due Date Tasks</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "linear-gradient(to right, #ffffff, #f8f9fa)", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <thead>
              <tr style={{ background: "linear-gradient(to right, #007bff, #0056b3)", color: "white" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Title</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Details</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Due Date</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Priority</th>
              </tr>
            </thead>
            <tbody>
              {dueDateTasks.map((task) => (
                <tr key={task._id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{task.title}</td>
                  <td style={{ padding: "10px" }}>{task.activities?.[0]?.activity || "No details"}</td>
                  <td style={{ padding: "10px" }}>{new Date(task.date).toDateString()}</td>
                  <td style={{ padding: "10px" }}>{task.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Navbar({ user, logout, showProfileMenu, setShowProfileMenu }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "linear-gradient(to right, #007bff, #0056b3)", color: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>Task Manager</span>
      <div style={{ display: "flex", alignItems: "center", gap: "15px", position: "relative" }}>
        <FaBell style={{ fontSize: "20px", cursor: "pointer" }} />
        <FaUser
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        />
        {showProfileMenu && (
          <div style={{ position: "absolute", top: "40px", right: "0", background: "white", color: "black", padding: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
            <p style={{ margin: "5px 0" }}>{user?.name}</p>
            <button onClick={logout} style={{ display: "flex", alignItems: "center", gap: "5px", background: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function KanbanBoard({ tasks }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", flexGrow: 1 }}>
      {statuses.map((status) => (
        <div key={status} style={{ width: "30%", background: "linear-gradient(to right, #ffffff, #f8f9fa)", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h3 style={{ textAlign: "center", textTransform: "uppercase", color: "#333", marginBottom: "15px" }}>
            {statusIcons[status]} {status}
          </h3>
          {tasks.filter((task) => task.stage.toLowerCase() === status)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      ))}
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <div style={{ background: priorityColors[task.priority], margin: "10px 0", padding: "15px", borderRadius: "8px", color: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h4 style={{ margin: "0 0 10px 0", display: "flex", alignItems: "center" }}>
        <FaFlag style={{ marginRight: "5px" }} /> {task.title}
      </h4>
      <p style={{ margin: "0 0 10px 0", display: "flex", alignItems: "center" }}>
        <FaInfoCircle style={{ marginRight: "5px" }} /> {task.activities?.[0]?.activity || "No details"}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <FaCalendarAlt style={{ marginRight: "5px" }} /> {new Date(task.date).toDateString()}
        </span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <FaTasks style={{ marginRight: "5px" }} /> {task.priority}
        </span>
      </div>
    </div>
  );
}

export default MemberDashboard;