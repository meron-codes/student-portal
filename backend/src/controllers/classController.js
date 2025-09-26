const pool = require('../config/db');

const addClass = async (req, res) => {
  try {
    const { grade, subject } = req.body;
    const result = await pool.query(
      'INSERT INTO classes (grade, subject) VALUES ($1, $2) RETURNING *',
      [grade, subject]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getClasses = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM classes ORDER BY grade');
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addClass, getClasses };
