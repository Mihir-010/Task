const express = require("express");
const { registerUser, loginUser,getUsersByRole } = require("../controllers/authController");

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

router.get("/users/:role", getUsersByRole);

module.exports = router;
