const pool = require('../config/db');

// GET /api/announcements
const getAnnouncements = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/announcements
const addAnnouncement = async (req, res) => {
  try {
    if (req.user.role !== 'admin') 
      return res.status(403).json({ message: 'Only admin can post announcements' });

    const { title, content } = req.body;
    const result = await pool.query(
      'INSERT INTO announcements (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAnnouncements, addAnnouncement };
