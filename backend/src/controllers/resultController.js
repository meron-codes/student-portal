const pool = require('../config/db');

// GET /api/results
const getResults = async (req, res) => {
  try {
    // Example: students see only their results
    if (req.user.role === 'student') {
      const result = await pool.query(
        'SELECT * FROM results WHERE student_id=$1',
        [req.user.id]
      );
      return res.json(result.rows);
    }

    // Admin sees all results
    if (req.user.role === 'admin') {
      const result = await pool.query('SELECT * FROM results');
      return res.json(result.rows);
    }

    res.status(403).json({ message: 'Access denied' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/results
const addResult = async (req, res) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ message: 'Only admin can add results' });

    const { student_id, subject, score } = req.body;

    const result = await pool.query(
      'INSERT INTO results (student_id, subject, score) VALUES ($1,$2,$3) RETURNING *',
      [student_id, subject, score]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getResults, addResult };
