const express = require('express');
const router = express.Router();
const { getAllTeachers,createTeacher } = require('../controllers/teacherController');
const { checkRole } = require('../middlewares/auth');

router.get('/',checkRole(['admin']),getAllTeachers);
router.post('/',checkRole(['admin']),createTeacher);

module.exports = router;
