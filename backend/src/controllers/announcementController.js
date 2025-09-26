const pool = require('../config/db');

const addAnnouncement = async (req, res) => {
  try {
    const { title, content } = req.body;
    const created_by = req.user.id; // from auth middleware
    const result = await pool.query(
      'INSERT INTO announcements (title, content, created_by) VALUES ($1, $2, $3) RETURNING *',
      [title, content, created_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC');
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addAnnouncement, getAllAnnouncements };
