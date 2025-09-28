const express = require('express');
const router = express.Router();
const { createAnnouncement,getAnnouncementsForStudent } = require('../controllers/announcementController');
const { checkRole } = require('../middlewares/auth');

router.post('/',checkRole(['admin','teacher']),createAnnouncement);
router.get('/student',checkRole(['student']),getAnnouncementsForStudent);

module.exports = router;
