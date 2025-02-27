
// import React, { useEffect, useState } from "react";

// const AdminTaskCard = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/tasks/all")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status) {
//           setTasks(data.tasks);
//         }
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   const getTaskStyle = (stage) => {
//     switch (stage) {
//       case "completed":
//         return {
//           background: "linear-gradient(135deg, #4caf50, #388e3c)",
//           color: "#fff",
//           border: "2px solid #2e7d32",
//         };
//       case "in-progress":
//         return {
//           background: "linear-gradient(135deg, #ff9800, #f57c00)",
//           color: "#fff",
//           border: "2px solid #e65100",
//         };
//       case "todo":
//         return {
//           background: "linear-gradient(135deg, #2196f3, #1976d2)",
//           color: "#fff",
//           border: "2px solid #0d47a1",
//         };
//       default:
//         return {
//           background: "linear-gradient(135deg, #9e9e9e, #757575)",
//           color: "#fff",
//           border: "2px solid #616161",
//         };
//     }
//   };

//   const containerStyle = {
//     height: "500px",
//     margin: "20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const taskContainerStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "15px",
//     width: "90%",
//     maxWidth: "1000px",
//     padding: "20px",
//   };

//   const taskCardStyle = {
//     padding: "15px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "transform 0.2s ease-in-out",
//     cursor: "pointer",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//   };

//   const titleStyle = {
//     fontSize: "18px",
//     fontWeight: "bold",
//     marginBottom: "5px",
//   };

//   const infoStyle = {
//     fontSize: "14px",
//     margin: "5px 0",
//   };

//   const filterContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "15px",
//   };

//   const filterButtonStyle = {
//     padding: "10px 15px",
//     borderRadius: "8px",
//     border: "none",
//     color: "#fff",
//     cursor: "pointer",
//     fontSize: "14px",
//     transition: "background 0.3s ease-in-out",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={taskContainerStyle}>
//         {tasks.map((task) => (
//           <div key={task._id} style={{ ...taskCardStyle, ...getTaskStyle(task.stage) }}>
//             <span style={titleStyle}>📌 {task.title}</span>
//             <span style={infoStyle}>📅 {new Date(task.date).toDateString()}</span>
//             <span style={infoStyle}>⚡ Priority: {task.priority}</span>
//             <span style={infoStyle}>📌 {task.stage.replace("-", " ")}</span>
//           </div>
//         ))}
//       </div>

//       <div style={filterContainerStyle}>
//         <button style={{ ...filterButtonStyle, background: "#1976d2" }}>📝 To-Do Tasks</button>
//         <button style={{ ...filterButtonStyle, background: "#f57c00" }}>⏳ In Progress</button>
//         <button style={{ ...filterButtonStyle, background: "#4caf50" }}>✅ Completed</button>
//       </div>
//     </div>
//   );
// };

// export default AdminTaskCard;

import React, { useEffect, useState } from "react";

const AdminTaskCard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setTasks(data.tasks);
        }
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const deleteTask = (taskId) => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setTasks(tasks.filter((task) => task._id !== taskId));
        }
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const getTaskStyle = (stage) => {
    switch (stage) {
      case "completed":
        return { background: "#e6f7e6", border: "2px solid #4caf50", color: "#2e7d32" };
      case "in-progress":
        return { background: "#fff3e0", border: "2px solid #ff9800", color: "#e65100" };
      case "todo":
        return { background: "#e3f2fd", border: "2px solid #2196f3", color: "#0d47a1" };
      default:
        return { background: "#f5f5f5", border: "2px solid #9e9e9e", color: "#616161" };
    }
  };

  return (
    <div style={{ background: "#f9f9f9", padding: "20px", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Task Management</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {tasks.map((task) => (
          <div
            key={task._id}
            style={{
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              cursor: "pointer",
              fontSize: "18px",
              ...getTaskStyle(task.stage),
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>📌 {task.title}</h3>
            <p>📅 {new Date(task.date).toDateString()}</p>
            <p>⚡ Priority: {task.priority}</p>
            <p>📌 {task.stage.replace("-", " ")}</p>
            <button
              onClick={() => deleteTask(task._id)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                background: "#d32f2f",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🗑️ Delete Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTaskCard;
