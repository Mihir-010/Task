import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  if (!task) return null; // Prevent rendering if task is undefined

  return (
    <tr>
      <td>{task.title || "No Title"}</td>
      <td>{task.date ? new Date(task.date).toLocaleDateString() : "No Date"}</td>
      <td><span className={`priority ${task.priority || "low"}`}>{task.priority || "low"}</span></td>
      <td><span className={`status ${task.stage || "todo"}`}>{task.stage || "todo"}</span></td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(task._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
