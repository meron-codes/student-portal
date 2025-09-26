const express = require('express');
const router = express.Router();
const { addAnnouncement, getAllAnnouncements } = require('../controllers/announcementController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addAnnouncement);       // Admin only (check role in middleware later)
router.get('/', auth, getAllAnnouncements);    // Students + Admin

module.exports = router;
