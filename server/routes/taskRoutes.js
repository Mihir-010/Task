// const express = require("express");
// const router = express.Router();
// const taskController = require("../controllers/taskController");

// // Routes
// router.post("/create", taskController.createTask);
// router.post("/assignMembers", taskController.assignMembers);
// router.get("/tasks/:memberId", taskController.getTasksForTeamLead);

// module.exports = router;
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create Task
router.post('/create', taskController.createTask);

// Assign Members to Task
router.put('/assign', taskController.assignMembers);

// Edit Task
router.put('/edit', taskController.editTask);

// Delete Task
router.delete('/delete/:taskId', taskController.deleteTask);

// Get Tasks by Status (Completed, In Progress, Todo)
router.get('/status/:status', taskController.getTasksByStatus);

// Get Tasks by Priority (High, Medium, Low)
router.get('/priority/:priority', taskController.getTasksByPriority);

// Get Due Tasks
router.get('/due', taskController.getDueTasks);

// Get Tasks for Team Lead
router.get('/team-lead/:memberId', taskController.getTasksForTeamLead);

module.exports = router;
