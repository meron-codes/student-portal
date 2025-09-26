<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const resultRoutes = require('./routes/resultRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const classRoutes = require('./routes/classRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/opportunities', opportunityRoutes);

// Test
app.get('/', (req, res) => res.send('Student Result Portal API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
||||||| empty tree
=======
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
>>>>>>> 061919d8829e4d43cb727f8f54f2e98e311906ff
