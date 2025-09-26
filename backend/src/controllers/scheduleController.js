const pool = require('../config/db');

// GET /api/schedules
const getSchedules = async (req, res) => {
  try {
    // Students see only their class schedule
    if (req.user.role === 'student') {
      const result = await pool.query(
        'SELECT * FROM schedules WHERE class_id IN (SELECT class_id FROM student_classes WHERE student_id=$1)',
        [req.user.id]
      );
      return res.json(result.rows);
    }

    // Admin sees all schedules
    if (req.user.role === 'admin') {
      const result = await pool.query('SELECT * FROM schedules ORDER BY date_time');
      return res.json(result.rows);
    }

    res.status(403).json({ message: 'Access denied' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/schedules
const addSchedule = async (req, res) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ message: 'Only admin can add schedules' });

    const { class_id, subject, date_time } = req.body;
    const result = await pool.query(
      'INSERT INTO schedules (class_id, subject, date_time) VALUES ($1, $2, $3) RETURNING *',
      [class_id, subject, date_time]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getSchedules, addSchedule };
