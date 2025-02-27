// const express = require("express");
// const { registerUser, loginUser,getUsersByRole } = require("../controllers/authController");

// const router = express.Router();

// // Register route
// router.post("/register", registerUser);

// // Login route
// router.post("/login", loginUser);

// router.get("/users/:role", getUsersByRole);
// router.post("/users/:role", registerUser); 

// module.exports = router;

const express = require("express");
const { registerUser, loginUser, getUsersByRole, getUserById,getRolesCount,getTeamLeadsAndMembers } = require("../controllers/authController");

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Get users by role
router.get("/users/:role", getUsersByRole);

// Get user profile by ID
router.get("/users/profile/:id", getUserById); // New route to fetch user by ID

// Register user by role
router.post("/users/:role", registerUser);

//cont all teamlead and member
router.get("/roles-count", getRolesCount);


router.get("/teamleads-members", getTeamLeadsAndMembers);

module.exports = router;

