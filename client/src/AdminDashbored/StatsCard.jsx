
import React, { useState, useEffect } from 'react';
import "../AdminDashbored/Admin.css";
import axios from 'axios';

const StatsCard = () => {
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalTeamLeads: 0,
    totalTasks: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const rolesResponse = await axios.get("http://localhost:3000/api/auth/roles-count");
        const tasksResponse = await axios.get("http://localhost:3000/api/tasks/stage/counts");

        setStats({
          totalMembers: rolesResponse.data.memberCount || 0,
          totalTeamLeads: rolesResponse.data.teamLeadCount || 0,
          totalTasks: tasksResponse.data.data.totalTasks || 0 // Corrected the path
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <ul className="box-info">
      <li>
        <i className='bx bxs-group'></i>
        <span className="text">
          <h3>{stats.totalMembers}</h3> {/* Fixed variable name */}
          <p>Total Members</p>
        </span>
      </li>
      <li>
        <i className='bx bxs-user'></i>
        <span className="text">
          <h3>{stats.totalTeamLeads}</h3> {/* Fixed variable name */}
          <p>Total Team Leads</p>
        </span>
      </li>
      <li>
        <i className='bx bxs-calendar-check'></i>
        <span className="text">
          <h3>{stats.totalTasks}</h3> {/* Fixed total tasks retrieval */}
          <p>Total Tasks</p>
        </span>
      </li>
    </ul>
  );
};

export default StatsCard;
