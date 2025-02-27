const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Create Task
router.post("/create", taskController.createTask);

// Get All Tasks
router.get("/all", taskController.getAllTasks);

//get single task
router.get("/:taskId", taskController.getSingleTask);

// Assign Members to Task
router.put("/:taskId/assign", taskController.assignMembers);

// Edit Task
router.put("/:taskId", taskController.editTask);

// Delete Task
router.delete("/:taskId", taskController.deleteTask);

// Get Tasks by Status (Completed, In Progress, To Do)
router.get("/status/:status", taskController.getTasksByStatus);

// Get Tasks by Priority (High, Medium, Low)
router.get("/priority/:priority", taskController.getTasksByPriority);

// Get Due Tasks
router.get("/due/tasks", taskController.getDueTasks);

// Get Tasks for Team Lead
router.get("/team-lead/:memberId", taskController.getTasksForTeamLead);

// Get Assigned Tasks for Member
router.get("/member/:memberId/assigned", taskController.getAssignedTasksForMember);

// Get Pending Tasks for Member
router.get("/member/:memberId/pending", taskController.getPendingTasksForMember);
// get all task conut

router.get("/stage/counts", taskController.getTotalTaskCounts);


//get all protyy based count
router.get("/counts/Priority",taskController.getTaskCountsByPriority)

module.exports = router;
