const express = require('express');
const { getAnnouncements, addAnnouncement } = require('../controllers/announcementController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Everyone logged in can see announcements
router.get('/', auth(['student','admin']), getAnnouncements);

// Only admin can post new announcements
router.post('/', auth('admin'), addAnnouncement);

module.exports = router;
