const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { User } = require("../models/user");

// API endpoint to get user details
router.get("/api/userdetails", auth, async (req, res) => {
  try {
    // Fetch user details from the authenticated user's token
    const user = await User.findById(req.user._id).select("-password");
    
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;