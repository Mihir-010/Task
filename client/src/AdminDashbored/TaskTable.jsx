
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem'; // Import TaskItem component
import "../AdminDashbored/Admin.css";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks/all"); 
        if (response.data && Array.isArray(response.data.tasks)) {
          setTasks(response.data.tasks); // Fixing the response format
        } else {
          console.error("API response is not an array:", response.data);
          setTasks([]);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>All Tasks</h3>
          <i className='bx bx-search'></i>
          <i className='bx bx-filter'></i>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map(task => (
                <TaskItem key={task._id} task={task} onDelete={handleDelete} />
              ))
            ) : (
              <tr>
                <td colSpan="5">No tasks available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
