const express = require('express');
const { getSchedule, addSchedule } = require('../controllers/scheduleController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Students can view schedules, admins can manage
router.get('/:class_grade', auth(['student','admin']), getSchedule);
router.post('/', auth('admin'), addSchedule);

module.exports = router;
