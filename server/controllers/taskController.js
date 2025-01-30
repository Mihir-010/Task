// const Task = require("../models/task");
// const User = require("../models/User");
// const Notice = require("../models/notification");

// // Create Task
// exports.createTask = async (req, res) => {
//   try {
//     const { title, team, stage, date, priority, assets } = req.body;
//     const userId = req.memberId; // Use member ID directly

//     let text = "New task has been assigned to you";
//     if (team?.length > 1) {
//       text = text + ` and ${team?.length - 1} others.`;
//     }

//     text = text + ` The task priority is set as ${priority}, so check and act accordingly. The task date is ${new Date(date).toDateString()}.`;

//     const task = await Task.create({
//       title,
//       team,
//       stage: stage.toLowerCase(),
//       date,
//       priority: priority.toLowerCase(),
//       assets,
//       activities: [{
//         type: "assigned",
//         activity: text,
//         by: userId
//       }]
//     });

//     await Notice.create({
//       team,
//       text,
//       task: task._id,
//     });

//     res.status(200).json({ status: true, task, message: "Task created successfully." });
//   } catch (error) {
//     res.status(400).json({ status: false, message: error.message });
//   }
// };

// // Assign Members to Task (Team Lead)
// exports.assignMembers = async (req, res) => {
//   try {
//     const { taskId, teamMembers } = req.body;

//     const task = await Task.findById(taskId);
//     if (!task) return res.status(404).json({ status: false, message: "Task not found" });

//     task.team = [...new Set([...task.team, ...teamMembers])]; // Assign team members

//     await task.save();

//     res.status(200).json({ status: true, message: "Members assigned successfully." });
//   } catch (error) {
//     res.status(400).json({ status: false, message: error.message });
//   }
// };

// // Get Tasks for a Team Lead
// exports.getTasksForTeamLead = async (req, res) => {
//   try {
//     const { memberId } = req.params;
    
//     const tasks = await Task.find({ "team": memberId }).populate("team", "name role");
//     res.status(200).json({ status: true, tasks });
//   } catch (error) {
//     res.status(400).json({ status: false, message: error.message });
//   }
// };
const Task = require("../models/task");
const User = require("../models/User");
const Notice = require("../models/notification");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, team, stage, date, priority, assets } = req.body;
    const userId = req.memberId; // Use member ID directly

    let text = "New task has been assigned to you";
    if (team?.length > 1) {
      text = text + ` and ${team?.length - 1} others.`;
    }

    text = text + ` The task priority is set as ${priority}, so check and act accordingly. The task date is ${new Date(date).toDateString()}.`;

    const task = await Task.create({
      title,
      team,
      stage: stage.toLowerCase(),
      date,
      priority: priority.toLowerCase(),
      assets,
      activities: [{
        type: "assigned",
        activity: text,
        by: userId
      }]
    });

    await Notice.create({
      team,
      text,
      task: task._id,
    });

    res.status(200).json({ status: true, task, message: "Task created successfully." });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Assign Members to Task (Team Lead)
exports.assignMembers = async (req, res) => {
  try {
    const { taskId, teamMembers } = req.body;

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ status: false, message: "Task not found" });

    task.team = [...new Set([...task.team, ...teamMembers])]; // Assign team members

    await task.save();

    res.status(200).json({ status: true, message: "Members assigned successfully." });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Edit Task Details
exports.editTask = async (req, res) => {
  try {
    const { taskId, title, team, stage, date, priority, assets } = req.body;
    
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ status: false, message: "Task not found" });

    task.title = title || task.title;
    task.team = team || task.team;
    task.stage = stage || task.stage;
    task.date = date || task.date;
    task.priority = priority || task.priority;
    task.assets = assets || task.assets;

    await task.save();

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

// Get Tasks by Status (Completed / In Progress / Todo)
exports.getTasksByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const tasks = await Task.find({ stage: status }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Tasks by Priority (High, Medium, Low)
exports.getTasksByPriority = async (req, res) => {
  try {
    const { priority } = req.params;

    const tasks = await Task.find({ priority: priority }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Due Tasks (Tasks nearing the deadline)
exports.getDueTasks = async (req, res) => {
  try {
    const today = new Date();
    const tasks = await Task.find({ date: { $lt: today } }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

// Get Tasks for a Team Lead
exports.getTasksForTeamLead = async (req, res) => {
  try {
    const { memberId } = req.params;
    
    const tasks = await Task.find({ "team": memberId }).populate("team", "name role");
    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
