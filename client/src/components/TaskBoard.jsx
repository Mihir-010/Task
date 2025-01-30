// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import TaskCard from "./TaskCard";

// const tasks = [
//   { id: 1, title: "Test Task", priority: "HIGH", status: "To Do", category: "Tutorial", assignee: "John Doe" },
//   { id: 2, title: "Review Code", priority: "MEDIUM", status: "In Progress", category: "Website App", assignee: "Alice" },
//   { id: 3, title: "Bug Fixing", priority: "HIGH", status: "To Do", category: "Development", assignee: "Michael" },
//   { id: 4, title: "Design UI", priority: "LOW", status: "Completed", category: "UI/UX", assignee: "Emma" },
// ];

// const TaskBoard = () => {
//   return (
//     <Container fluid className="p-4 task-board">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>Tasks</h3>
//         <Button variant="primary">+ Create Task</Button>
//       </div>
      
//       <Row>
//         <Col md={4}>
//           <h5 className="text-primary">To Do</h5>
//           {tasks.filter(task => task.status === "To Do").map(task => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </Col>
        
//         <Col md={4}>
//           <h5 className="text-warning">In Progress</h5>
//           {tasks.filter(task => task.status === "In Progress").map(task => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </Col>

//         <Col md={4}>
//           <h5 className="text-success">Completed</h5>
//           {tasks.filter(task => task.status === "Completed").map(task => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TaskBoard;
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import TaskCard from "./TaskCard";

const initialTasks = [
  { id: 1, title: "Test Task", priority: "HIGH", status: "To Do", category: "Tutorial", assignee: "John Doe" },
  { id: 2, title: "Review Code", priority: "MEDIUM", status: "In Progress", category: "Website App", assignee: "Alice" },
  { id: 3, title: "Bug Fixing", priority: "HIGH", status: "To Do", category: "Development", assignee: "Michael" },
  { id: 4, title: "Design UI", priority: "LOW", status: "Completed", category: "UI/UX", assignee: "Emma" },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    team: "",
    stage: "To Do",
    date: "",
    priority: "low",
    assets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTask = {
      ...taskData,
      team: taskData.team.split(",").map(member => member.trim()), // Convert team input to array
      assets: taskData.assets.split(",").map(asset => asset.trim()), // Convert assets input to array
    };

    try {
      const response = await fetch("http://localhost:3000/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const result = await response.json();

      if (response.ok) {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        setShowModal(false);
      } else {
        console.error("Error creating task:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <Container fluid className="p-4 task-board">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Tasks</h3>
        <Button variant="primary" onClick={() => setShowModal(true)}>+ Create Task</Button>
      </div>

      <Row>
        <Col md={4}>
          <h5 className="text-primary">To Do</h5>
          {tasks.filter(task => task.stage === "To Do").map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Col>

        <Col md={4}>
          <h5 className="text-warning">In Progress</h5>
          {tasks.filter(task => task.stage === "In Progress").map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Col>

        <Col md={4}>
          <h5 className="text-success">Completed</h5>
          {tasks.filter(task => task.stage === "Completed").map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Col>
      </Row>

      {/* Modal for Creating a Task */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" name="title" value={taskData.title} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="team">
              <Form.Label>Team Members (comma-separated IDs)</Form.Label>
              <Form.Control type="text" name="team" value={taskData.team} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="stage">
              <Form.Label>Status</Form.Label>
              <Form.Select name="stage" value={taskData.stage} onChange={handleChange}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="date" value={taskData.date} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Select name="priority" value={taskData.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="assets">
              <Form.Label>Assets (comma-separated URLs)</Form.Label>
              <Form.Control type="text" name="assets" value={taskData.assets} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">Create Task</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TaskBoard;
