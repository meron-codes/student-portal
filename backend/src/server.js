const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const resultRoutes = require('./routes/resultRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/opportunities', opportunityRoutes);

// Test route
app.get('/', (req, res) => res.send('Student Portal Backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
