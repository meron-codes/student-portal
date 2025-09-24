// backend/src/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:3000', // React frontend
}));
app.use(express.json());

// ✅ Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const pool = require('./config/db');

pool.query('SELECT NOW()', (err, res) => {
  if(err){
    console.error('DB connection error:', err);
  } else {
    console.log('DB connected:', res.rows[0]);
  }
});
