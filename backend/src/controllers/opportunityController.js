const pool = require('../config/db');

// GET /api/opportunities
const getOpportunities = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM opportunities ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/opportunities
const addOpportunity = async (req, res) => {
  try {
    if (req.user.role !== 'admin')
      return res.status(403).json({ message: 'Only admin can add opportunities' });

    const { title, description, link } = req.body;
    const result = await pool.query(
      'INSERT INTO opportunities (title, description, link) VALUES ($1, $2, $3) RETURNING *',
      [title, description, link]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getOpportunities, addOpportunity };
