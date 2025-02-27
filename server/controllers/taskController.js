const Task = require("../models/task");
const User = require("../models/User");
const Notice = require("../models/notification");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, team, stage, date, priority, assets } = req.body;
    const userId = req.memberId;  // Assuming the user creating the task is available in req.memberId

    // Construct the task description
    let text = "New task has been assigned to you";

    if (team?.length > 1) {
      text += ` and ${team.length - 1} others.`;
    }

    text += ` The task priority is set as ${priority}, so check and act accordingly. The task date is ${new Date(date).toDateString()}.`;

    // Create the new task
    const task = await Task.create({
      title,
      team,
      stage: stage.toLowerCase(), // Ensure stage is in lowercase
      date,
      priority: priority.toLowerCase(), // Ensure priority is in lowercase
      assets,
      activities: [
        {
          type: "assigned",
          activity: text,
          by: userId,
        },
      ],
    });

    // Create a notice for the team members
    await Notice.create({
      team,
      text,
      task: task._id,
    });

    // Send success response
    res.status(201).json({ status: true, task, message: "Task created successfully." });
  } catch (error) {
    console.error(error);
    // Send error response with status 400 and the error message
    res.status(400).json({ status: false, message: error.message });
  }
};



// controllers/taskController.js

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("team", "name role"); // Fetch all tasks and populate the team field with user details
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

//get task in single

// ✅ Fetch single task by ID
exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assign Members to Task (Team Lead)
exports.assignMembers = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { teamMembers } = req.body;

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ status: false, message: "Task not found" });

    task.team = [...new Set([...task.team, ...teamMembers])]; // Assign unique team members
    await task.save();

    res.status(200).json({ status: true, message: "Members assigned successfully." });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Edit Task
exports.editTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updatedData = req.body;

    const task = await Task.findByIdAndUpdate(taskId, updatedData, { new: true });
    if (!task) return res.status(404).json({ status: false, message: "Task not found" });

    res.status(200).json({ status: true, task, message: "Task updated successfully." });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findByIdAndDelete(taskId);
    if (!task) return res.status(404).json({ status: false, message: "Task not found" });

    res.status(200).json({ status: true, message: "Task deleted successfully." });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Tasks by Status (Completed, In Progress, To Do)
exports.getTasksByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const tasks = await Task.find({ stage: status.toLowerCase() }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Tasks by Priority (High, Medium, Low)
exports.getTasksByPriority = async (req, res) => {
  try {
    const { priority } = req.params;

    const tasks = await Task.find({ priority: priority.toLowerCase() }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Due Tasks (Tasks with Due Date Today or Overdue)
exports.getDueTasks = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tasks = await Task.find({ date: { $lte: today } }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Tasks for a Team Lead
exports.getTasksForTeamLead = async (req, res) => {
  try {
    const { memberId } = req.params;

    const tasks = await Task.find({ team: memberId }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};




// Get Assigned Tasks for a Member
exports.getAssignedTasksForMember = async (req, res) => {
  try {
    const { memberId } = req.params;  // Get member ID from URL params

    // Find tasks assigned to the specific member (excluding completed tasks)
    const tasks = await Task.find({ team: memberId, stage: { $ne: "completed" } })
      .populate("team", "name role");  // Populate team details to get user details (name, role)

    if (!tasks.length) {
      return res.status(404).json({ status: false, message: "No tasks found for this member." });
    }

    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Pending Tasks for Member (not completed)
exports.getPendingTasksForMember = async (req, res) => {
  try {
    const { memberId } = req.params;  // Get member ID from URL params

    // Find tasks assigned to the member that are not completed
    const tasks = await Task.find({ team: memberId, stage: { $ne: "completed" } })
      .populate("team", "name role");  // Populate team details for the member

    if (!tasks.length) {
      return res.status(404).json({ status: false, message: "No pending tasks found for this member." });
    }

    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
//get conut status based
// Get Total Task Counts and Breakdown by Status
exports.getTotalTaskCounts = async (req, res) => {
  try {
    // Fetch counts for different task statuses
    const totalTasks = await Task.countDocuments(); // Total tasks count
    const todoCount = await Task.countDocuments({ stage: "todo" });
    const inProgressCount = await Task.countDocuments({ stage: "in-progress" });
    const completedCount = await Task.countDocuments({ stage: "completed" });

    // Return response with task counts
    res.status(200).json({
      status: true,
      data: {
        totalTasks,  // Overall task count
        statusCounts: {
          todo: todoCount,
          inProgress: inProgressCount,
          completed: completedCount,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching total task counts:", error);
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Task Counts by Priority (High, Medium, Low)
exports.getTaskCountsByPriority = async (req, res) => {
  try {
    // Count tasks by each priority
    const highPriorityTasks = await Task.countDocuments({ priority: "high" });
    const mediumPriorityTasks = await Task.countDocuments({ priority: "medium" });
    const lowPriorityTasks = await Task.countDocuments({ priority: "low" });

    // Return the counts in the required format for bar chart
    res.status(200).json({
      status: true,
      data: {
        labels: ["High", "Medium", "Low"],
        datasets: [
          {
            label: "Total Tasks",
            backgroundColor: "#8a7efb",
            data: [highPriorityTasks, mediumPriorityTasks, lowPriorityTasks],
          },
        ],
      },
    });
  } catch (error) {
    console.error("Error fetching task counts by priority:", error);
    res.status(400).json({ status: false, message: error.message });
  }
};
