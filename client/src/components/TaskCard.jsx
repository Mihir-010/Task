// import React from "react";
// import { Card, Badge, Button } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";

// const TaskCard = () => {


//   return (
//     <Card className="task-card p-3">
      
//       <h5 className="mt-2">task title</h5>
//       <p>task category</p>
//       <div className="d-flex justify-content-between align-items-center">
//         <div>
//           <FaUserCircle size={20} className="me-2 text-primary" />
//           task.assignee
//         </div>
//         <Button variant="outline-primary" size="sm">Add Subtask</Button>
//       </div>
//     </Card>
//   );
// };

// export default TaskCard;
import React from "react";
import { Card } from "react-bootstrap";

const TaskCard = ({ task }) => {
  if (!task) {
    return <p className="text-danger">Task data is missing!</p>;
  }

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{task.title || "Untitled Task"}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Priority: {task.priority || "Not Set"}
        </Card.Subtitle>
        <Card.Text>Status: {task.stage || "Unknown"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
