const express = require('express');
const router = express.Router();
const { createSchedule,getScheduleForStudent } = require('../controllers/scheduleController');
const { checkRole } = require('../middlewares/auth');

router.post('/',checkRole(['admin']),createSchedule);
router.get('/student',checkRole(['student']),getScheduleForStudent);

module.exports = router;
