const express = require('express');
const router = express.Router();
const { login, addUser } = require('../controllers/authController');

router.post('/login', login);
router.post('/add-user', addUser);

module.exports = router;
