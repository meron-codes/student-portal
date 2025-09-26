const pool = require('../config/db');

// GET /api/classes
const getClasses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM classes ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/classes
const addClass = async (req, res) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ message: 'Only admin can add classes' });

    const { name, teacher } = req.body;
    const result = await pool.query(
      'INSERT INTO classes (name, teacher) VALUES ($1, $2) RETURNING *',
      [name, teacher]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getClasses, addClass };
