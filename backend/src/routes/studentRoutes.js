const express = require('express');
const router = express.Router();
const { getResults, getNotifications } = require('../controllers/studentController');

router.get('/results/:student_id', getResults);
router.get('/notifications/:student_id', getNotifications);

module.exports = router;
