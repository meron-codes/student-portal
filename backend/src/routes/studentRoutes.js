const express = require('express');
const router = express.Router();
const { getAllStudents,getStudentById,createStudent } = require('../controllers/studentController');
const { checkRole } = require('../middlewares/auth');

router.get('/',checkRole(['admin','teacher']),getAllStudents);
router.get('/:id',checkRole(['admin','teacher','student']),getStudentById);
router.post('/',checkRole(['admin']),createStudent);

module.exports = router;
