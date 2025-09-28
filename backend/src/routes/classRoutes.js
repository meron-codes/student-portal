const express = require("express");
const { getClasses, addClass } = require("../controllers/classController");
const { auth, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Students and admins can view classes
router.get("/", auth, authorizeRoles("student", "admin"), getClasses);

// Only admins can add classes
router.post("/", auth, authorizeRoles("admin"), addClass);

module.exports = router;
