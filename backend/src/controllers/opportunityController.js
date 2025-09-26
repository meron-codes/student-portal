const pool = require('../config/db');

const addOpportunity = async (req, res) => {
  try {
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

const getOpportunities = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM opportunities ORDER BY id DESC');
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addOpportunity, getOpportunities };
