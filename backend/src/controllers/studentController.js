const pool = require('../db');

exports.getResults = async (req, res) => {
  const { student_id } = req.params;
  try {
    const results = await pool.query(
      `SELECT subject, result_type, score, grade
       FROM results WHERE student_id=$1 ORDER BY created_at DESC`,
      [student_id]
    );
    res.json(results.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get results' });
  }
};

exports.getNotifications = async (req, res) => {
  const { student_id } = req.params;
  try {
    const notifs = await pool.query(
      `SELECT message, created_at, is_read FROM notifications
       WHERE student_id=$1 ORDER BY created_at DESC`,
      [student_id]
    );
    res.json(notifs.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get notifications' });
  }
};
