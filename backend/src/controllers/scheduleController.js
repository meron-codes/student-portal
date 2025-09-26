const pool = require('../config/db');

const addSchedule = async (req, res) => {
  try {
    const { class_grade, subject, day_of_week, holiday_activity } = req.body;
    const result = await pool.query(
      'INSERT INTO schedules (class_grade, subject, day_of_week, holiday_activity) VALUES ($1, $2, $3, $4) RETURNING *',
      [class_grade, subject, day_of_week, holiday_activity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSchedule = async (req, res) => {
  try {
    const { class_grade } = req.params;
    const results = await pool.query('SELECT * FROM schedules WHERE class_grade=$1 ORDER BY day_of_week', [class_grade]);
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addSchedule, getSchedule };
