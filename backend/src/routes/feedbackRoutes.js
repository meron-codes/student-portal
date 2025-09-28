const express = require('express');
const router = express.Router();
const { createFeedback,getFeedbackForStudent } = require('../controllers/feedbackController');
const { checkRole } = require('../middlewares/auth');

router.post('/',checkRole(['admin','teacher']),createFeedback);
router.get('/student',checkRole(['student']),getFeedbackForStudent);

module.exports = router;
