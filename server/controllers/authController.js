const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// Register a new user with profile details
exports.registerUser = async (req, res) => {
  const { name, email, password, role, profilePhoto, place, dateOfBirth, phoneNumber } = req.body;
  
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = new User({ 
      name, 
      email, 
      password, 
      role, 
      profilePhoto, 
      place, 
      dateOfBirth, 
      phoneNumber 
    });
    
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



// Login user with role check
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Check if the user has the allowed role
    if (user.role !== "teamLead" && user.role !== "member") {
      return res.status(403).json({ message: "Access denied. Only teamLead or member can log in." });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "50h" }
    );
    
    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error: error.message || error });
  
  
  }
};




// Fetch all users by role
exports.getUsersByRole = async (req, res) => {
  const { role } = req.params; 

  try {
    const users = await User.find({ role: role });

    if (!users.length) {
      return res.status(404).json({ message: `No ${role}s found` });
    }

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch user profile by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get total count of teamlead and member
exports.getRolesCount = async (req, res) => {
  try {
    const teamLeadCount = await User.countDocuments({ role: 'teamlead' });
    const memberCount = await User.countDocuments({ role: 'member' });

    res.status(200).json({ teamLeadCount, memberCount });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



// Fetch all Team Leads and Members
exports.getTeamLeadsAndMembers = async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ["teamLead", "member"] } });

    if (!users.length) {
      return res.status(404).json({ message: "No Team Leads or Members found" });
    }

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
